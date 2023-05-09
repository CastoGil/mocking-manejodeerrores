import { userModel } from "../Dao/models/user.js";
import EErrors from "../services/errors/enums.js";
import CustomError from "../services/errors/CustomError.js";

export const userRepository = {
  getUserByEmail: async (email) => {
    try {
      return await userModel.findOne({ email: email });
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to get user by email",
        code: EErrors.DATABASE_ERROR,
      })
  }},
  createUser: async (first_name, last_name, age, email, password, role) => {
    try {
      const user = new userModel({
        first_name,
        last_name,
        age,
        email,
        password,
        role,
      });
      return await user.save();
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to create User",
        code: EErrors.DATABASE_ERROR,
      })
    
  }}
};
