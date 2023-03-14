import express from 'express';
import * as CartController from '../controllers/cart.controller'
const router = express.Router();
import { userAuth } from '../middlewares/auth.middleware';
import { newCartValidator } from '../validators/cart.validator';
router.post("/:id", userAuth,CartController.addToCart)
router.put("/reduce/:id",userAuth,CartController.decreaseQuantityOfBook)
router.put("/remove/:id",userAuth,CartController.removeBook)
router.put("/purchase/:id",CartController.purchaseBook)
export default router;

