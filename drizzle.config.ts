import * as dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials:{
    url: 'postgresql://calendardb_owner:m4yTZY3jvXaU@ep-solitary-violet-a54h9lqw.us-east-2.aws.neon.tech/calendardb',
  },
});