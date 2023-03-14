import express from 'express';
import * as WishListController from '../controllers/WishList.controller'
const router = express.Router();
import { userAuth } from '../middlewares/auth.middleware';

router.post("/:id",userAuth,WishListController.addToWishList)

router.post("/remove/:id",userAuth,WishListController.removeFromWishList)

export default router;