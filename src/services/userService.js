import userRepository from '../Dao/user/user.js';

export const userService = {
  getUserByEmail: async (email) => {
    return await userRepository.getUserByEmail(email);
  },
  createUser: async (first_name, last_name, age, email, password, role) => {
    return await userRepository.createUser(first_name, last_name, age, email, password, role);
  },
};





