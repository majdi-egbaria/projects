import { createAuthClient } from "better-auth/react";

import { config } from "@/config/config";

export const auth = createAuthClient({
  baseURL: `${config.apiBaseUrl}/auth`,
});
