import express from 'express';
import * as BookController from '../controllers/Book.controller'


const router = express.Router();

router.get("", BookController.getAllBooks)


router.get('/:_id', BookController.getBook)

export default router;