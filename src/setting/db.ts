import { Pool } from "pg";

export const pool = new Pool({
  user: "pps",
  host: "localhost",
  database: "mydatabase",
  password: "jgieiorgjeiro",
  port: 5466,
});
