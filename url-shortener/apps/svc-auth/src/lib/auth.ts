import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { prisma } from "./prisma/database.js";
import { config } from "../config.js";

const { host, port } = config;

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  trustedOrigins: [`http://${host}:4000`],
});
