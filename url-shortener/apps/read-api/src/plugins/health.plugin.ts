import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";

export const healthPlugin: FastifyPluginAsync = async (app) => {
  app.route({
    method: "GET",
    url: "/health",
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            status: { type: "string" },
            uptime: { type: "number" },
            timestamp: { type: "string" },
            memory: {
              type: "object",
              properties: {
                rss: { type: "number" },
                heapUsed: { type: "number" },
                heapTotal: { type: "number" },
              },
            },
          },
        },
      },
    },
    handler: async (_, reply) => {
      const memory = process.memoryUsage();
      return reply.send({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        memory: {
          rss: memory.rss,
          heapUsed: memory.heapUsed,
          heapTotal: memory.heapTotal,
        },
      });
    },
  });
};

export default fp(healthPlugin);
