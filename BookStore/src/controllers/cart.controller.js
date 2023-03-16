import * as CartService from '../services/cart.service'
import HttpStatus from 'http-status-codes';


export const addToCart = async (req, res, next) => {
    try {
      const data = await CartService.addBook(req.body.userID,req.params.id)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Added to cart successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const decreaseQuantityOfBook = async (req, res, next) => {
    try {
      const data = await CartService.decreaseQuantityOfBook(req.body.userID,req.params.id)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Reduced quantity by 1 successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const removeBook = async (req, res, next) => {
    try {
      const data = await CartService.removeBook(req.body.userID,req.params.id)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Removed book successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const purchaseBook = async (req, res, next) => {
    try {
      const data = await CartService.purchaseBook(req.params.id)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Order Purchased successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const lowToHigh = async (req, res, next) => {
    try {
      const data = await CartService.lowToHigh(req.body.userID)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Order arranged according low to high price'
        });
    } catch (error) {
        next(error);
    }
};

export const highToLow = async (req, res, next) => {
    try {
      const data = await CartService.highToLow(req.body.userID)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Order arranged according high to low price'
        });
    } catch (error) {
        next(error);
    }
};


export const searchByText = async (req, res, next) => {
    try {
      const data = await CartService.searchByText(req.params.searchText)
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Books from your search'
        });
    } catch (error) {
        next(error);
    }
};

