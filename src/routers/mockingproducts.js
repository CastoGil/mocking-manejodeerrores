import express from "express";
import generateMockProducts from "../mocks/index.js";
const router = express.Router();
router.get("/mockingproducts", (req, res) => {
  const mockProducts = generateMockProducts(100);
  res.json(mockProducts);
});
export default router;
