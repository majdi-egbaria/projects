import healthPlugin from "./plugins/health.plugin.js";

export const plugins = { health: healthPlugin };

export type IPlaceholder = {
  attribute: string;
};
