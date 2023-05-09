import express from "express";
const router = express.Router();
import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
} from "../controllers/controllerDb/productsController.js";
import { admin, authorize } from "../middlewares/index.js";

///rutas de productos//
router.get("/", admin, getAllProductsController); //ruta principal de la eccomerce
router.get("/:pid", getProductByIdController);
router.post("/",  createProductController);
router.put("/:pid", admin, authorize, updateProductController);
router.delete("/:pid", admin, authorize, deleteProductController);

export default router;
