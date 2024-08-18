import { Pool } from "pg";

export const pool = new Pool({
  user: "user",
  host: "localhost",
  database: "mydatabase",
  password: "password",
  port: 5466,
});
