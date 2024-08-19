import { CreateUser, UpdateUser } from "../model/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface User {
  id: number;
  name: string;
  email: string;
}

export const UserRepository = {
  getAllUsers: async (): Promise<User[]> => {
    const res = await prisma.user.findMany();
    return res;
  },

  getUserById: async (id: number): Promise<User | null> => {
    const res = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return res;
  },

  createUser: async (user: CreateUser): Promise<User> => {
    const res = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });
    return res;
  },

  updateUser: async (id: number, user: UpdateUser): Promise<User> => {
    const res = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: user.name,
        email: user.email,
      },
    });
    return res;
  },

  deleteUser: async (id: number): Promise<void> => {
    await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return Promise.resolve();
  },
};
