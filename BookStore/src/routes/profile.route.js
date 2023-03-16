import express from 'express';
import * as ProfileController from '../controllers/profile.controller'
import { newProfileValidator } from '../validators/profile.validator';
const router = express.Router();
import { userAuth } from '../middlewares/auth.middleware';

router.post("",userAuth,newProfileValidator,ProfileController.addProfile)
router.delete("/remove/:address",userAuth,ProfileController.removeAddress)

export default router;