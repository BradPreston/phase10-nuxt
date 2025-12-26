import { defineConfig } from "drizzle-kit";

import env from "./lib/env";

export default defineConfig({
  schema: "./lib/db/schema/index.ts",
  out: "./lib/db/migrations",
  casing: "snake_case",
  dialect: "turso",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.NODE_ENV === "development" ? undefined : env.DATABASE_AUTH_TOKEN,
  },
});
