import * as WishListService from '../services/wishlist.service'
import HttpStatus from 'http-status-codes';

export const addToWishList = async (req, res, next) => {
    try {
        const data = await WishListService.addToWishList(req.body.userID, req.params.id)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Added book to wishlist successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const removeFromWishList = async (req, res, next) => {
    try {
        const data = await WishListService.removeFromWishList(req.body.userID, req.params.id)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Removed book from wishlist successfully'
        });
    } catch (error) {
        next(error);
    }
};