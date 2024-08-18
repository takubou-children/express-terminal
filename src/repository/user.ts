import { CreateUser } from "../model/user";
import { pool } from "../setting/db";

export interface User {
  id: number;
  email: string;
  password: string;
}

export const UserRepository = {
  getAllUsers: async (): Promise<User[]> => {
    const res = await pool.query("SELECT * FROM users");
    return res.rows;
  },

  getUserById: async (id: number): Promise<User | null> => {
    const res = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
    return res.rows[0];
  },

  createUser: async (user: CreateUser): Promise<User> => {
    const res = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [user.email, user.password]
    );
    return res.rows[0];
  },

  updateUser: async (user: User): Promise<User> => {
    const res = await pool.query(
      "UPDATE users SET email = $1, password = $2 WHERE id = $3 RETURNING *",
      [user.email, user.password, user.id]
    );
    return res.rows[0];
  },

  deleteUser: async (id: number): Promise<void> => {
    await pool.query("DELETE FROM users WHERE id = $1", [id]);
  },
};
