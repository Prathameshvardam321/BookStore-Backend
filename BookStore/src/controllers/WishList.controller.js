import * as WishListService from '../services/wishlist.service'
import HttpStatus from 'http-status-codes';

export const addToWishList = async (req, res, next) => {
    try {
        const data = await WishListService.addToWishList(req.body.userID, req.params.id)
        if (!data.message=="WishList already contains book") {
            console.log(data);
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: data,
                message: 'Added book to wishlist successfully'
            });  
        }else{
            res.status(HttpStatus.CREATED).json({
                code: HttpStatus.CREATED,
                data: "",
                message: data.message
            });   
        }
        
    } catch (error) {
        next(error);
    }
};

export const removeFromWishList = async (req, res, next) => {
    try {
        const data = await WishListService.removeFromWishList(req.body.userID, req.params.id)
        if (data.message=="book already removed.") {
            res.status(HttpStatus.BAD_REQUEST).json({
                code: HttpStatus.BAD_REQUEST,
                data: "",
                message: data.message
            });
        }
        else{
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Removed book from wishlist successfully'
        });
    }
    } catch (error) {
        next(error);
    }
};