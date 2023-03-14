import * as BookService from '../services/book.service'
import HttpStatus from 'http-status-codes';

// export const createBook = async (req, res, next) => {
//     try {
//         const data = await BookService.createBook(req.body)
//         res.status(HttpStatus.CREATED).json({
//             code: HttpStatus.CREATED,
//             data: data,
//             message: 'Book added successfully'
//         });
//     } catch (error) {
//         next(error)
//     }
// }


export const getAllBooks = async (req, res, next) => {
    try {
       console.log(req.params,"-------------------req.params");
        const data = await BookService.getAllBooks(req.body);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All Books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};


export const getBook = async (req, res, next) => {
    try {
        const data = await BookService.getBook(req.params._id,req);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Note fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};
