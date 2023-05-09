import { userModel } from "../models/user.js";
const userDAO = {
    getUserByEmail: async (email) => {
      return await userModel.findOne({ email });
    },
    createUser: async (first_name, last_name, age, email, password, role) => {
      const user = new userModel({
        first_name,
        last_name,
        age,
        email,
        password,
        role,
      });
      return await user.save();
    },
};
  
export default userDAO;
  
  
  
  