import Fastify from "fastify";
import fastifyHelmet from "@fastify/helmet";
import fastifyCors from "@fastify/cors";
import fastifyRateLimit from "@fastify/rate-limit";
import fastifySensible from "@fastify/sensible";
import { fromNodeHeaders } from "better-auth/node";

import { plugins } from "@repo/backend";

import { auth } from "./lib/auth.js";
import { config } from "./config.js";

const { host, port } = config;

const app = Fastify({
  logger: true,
});

app.register(fastifySensible);

app.register(fastifyHelmet);

app.register(fastifyCors, {
  origin: process.env.CLIENT_ORIGIN || `http://${host}:${port}`,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true,
  maxAge: 86400,
});

app.register(fastifyRateLimit, {
  max: 100,
  timeWindow: "1 minute",
});

app.register(plugins.health);

app.route({
  method: ["GET", "POST"],
  url: "/api/auth/*",
  async handler(request, reply) {
    try {
      // Construct request URL
      const url = new URL(request.url, `http://${request.headers.host}`);

      // Convert Fastify headers to standard Headers object
      const headers = fromNodeHeaders(request.headers);
      // Create Fetch API-compatible request
      const req = new Request(url.toString(), {
        method: request.method,
        headers,
        ...(request.body ? { body: JSON.stringify(request.body) } : {}),
      });
      // Process authentication request
      const response = await auth.handler(req);
      // Forward response to client
      reply.status(response.status);
      response.headers.forEach((value, key) => reply.header(key, value));
      return reply.send(response.body ? await response.text() : null);
    } catch (error) {
      app.log.error("Authentication Error:", error as any);
      return reply.status(500).send({
        error: "Internal authentication error",
        code: "AUTH_FAILURE",
      });
    }
  },
});

const start = async () => {
  try {
    await app.listen({ port, host });
    app.log.info(`Server is running at http://${host}:${port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
