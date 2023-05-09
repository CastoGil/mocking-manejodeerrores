import { CartDAO } from "../Dao/carts/cartDao.js";
import CustomError from "../services/errors/CustomError.js";
import EErrors from "../services/errors/enums.js";

const cartDAO = new CartDAO();

export const cartRepository = {
  createCart: async () => {
    try {
      const newCart = await cartDAO.createCart();
      return newCart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to created cart",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
  getCartById: async (cartId) => {
    try {
      const cart = await cartDAO.getCartById(cartId);
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to get cart by id",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
  addProductToCart: async (cartId, productId) => {
    try {
      const cart = await cartDAO.addProductToCart(cartId, productId);
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to add product to cart",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
  deleteProductFromCart: async (cartId, productId) => {
    try {
      const cart = await cartDAO.deleteProductFromCart(cartId, productId);
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to delete product",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
  updateCart: async (cartId, updateData) => {
    console.log("update", updateData)
    
    try {
      const cart = await cartDAO.updateCart(cartId, updateData);
      console.log("carRepository", cart)
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to update cart",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },

  updateProductQuantityInCart: async (cartId, productId, quantity) => {
    try {
      const cart = await cartDAO.updateProductQuantityInCart(
        cartId,
        productId,
        quantity
      );
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to update product quantity",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
  deleteAllProductsFromCart: async (cartId) => {
    try {
      const cart = await cartDAO.deleteAllProductsFromCart(cartId);
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to delete all products",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
  getCartByIdproduct: async (cartId) => {
    try {
      const cart = await cartDAO.getCartByIdproduct(cartId);
      return cart;
    } catch (error) {
      throw new CustomError({
        name: "Database Error",
        cause: "Failed to get cart by id product",
        code: EErrors.DATABASE_ERROR,
      });
    }
  },
};
