// Import express.
import express from "express";

// Import function from controller.
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";

// Init express router.
const router = express.Router();

// Get all data.
router.get('/products', showProducts);
// Get data.
router.get('/products/:id', showProductById);
// Post data.
router.post('/products', createProduct);
// Update data.
router.put('/products/:id', updateProduct);
// Delete data.
router.delete('/products/:id', deleteProduct);

// Export default router.
export default router;