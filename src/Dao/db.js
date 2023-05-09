import mongoose from "mongoose";
import { config } from "../config/env.config.js";
const mongoURI = config.mongoURI
// Función para conectar a la base de datos
const connectToDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to database");
};

export default connectToDB;
