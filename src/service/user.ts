import { UserRepository } from "../repository/user";
import type { User } from "../repository/user";
import type { UpdateUser, CreateUser } from "../model/user";
export const UserService = {
  getAllUsers: async () => {
    return UserRepository.getAllUsers();
  },
  getUserById: async (id: number) => {
    return UserRepository.getUserById(id);
  },
  createUser: async (user: CreateUser) => {
    return UserRepository.createUser(user);
  },
  updateUser: async (id: number, user: UpdateUser) => {
    return UserRepository.updateUser({ ...user, id });
  },
  deleteUser: async (id: number) => {
    return UserRepository.deleteUser(id);
  },
};
