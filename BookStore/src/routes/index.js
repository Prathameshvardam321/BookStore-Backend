import express from 'express';
const router = express.Router();
import { userAuth } from '../middlewares/auth.middleware';
import userRoute from './user.route';
import bookRoute from './book.route'
import cartRoute from './cart.route'
import wishlistRoute from './wishlist.route'
import profilerouter from './profile.route';
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', userRoute);
  router.use('/books',userAuth,bookRoute)
  router.use('/cart', cartRoute);
  router.use('/wishlist',wishlistRoute)
  router.use('/profile',profilerouter)
  return router;
};

export default routes;
