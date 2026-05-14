import Fastify, { FastifyRequest } from "fastify";
import fastifyHelmet from "@fastify/helmet";
import fastifyCors from "@fastify/cors";
import fastifyRateLimit from "@fastify/rate-limit";
import fastifySensible from "@fastify/sensible";

const app = Fastify({
  logger: true,
});

app.register(fastifySensible);

app.register(fastifyHelmet);

app.register(fastifyCors);

app.register(fastifyRateLimit, {
  max: 100,
  timeWindow: "1 minute",
});

app.route({
  url: "/:id",
  method: "GET",
  schema: {
    params: {
      type: "object",
      properties: {
        id: {
          type: "string",
          minLength: 1,
          maxLength: 64,
          pattern: "^[a-zA-Z0-9_-]+$",
        },
      },
      required: ["id"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          ok: { type: "boolean" },
          message: { type: "string" },
        },
      },

      404: {
        type: "object",
        properties: {
          message: { type: "string" },
        },
      },
    },
  },
  handler: async (request: FastifyRequest<{ Params: { id: string } }>) => {
    const { id } = request.params;
    return {
      ok: true,
      message: id,
    };
  },
});

const start = async () => {
  const port = Number(process.env.PORT) || 3000;
  const host = process.env.HOST || "0.0.0.0";

  try {
    await app.listen({ port, host });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
