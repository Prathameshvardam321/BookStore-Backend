import { getBook } from "./book.service"
import Book from "../models/Book.model"
import Wishlist from "../models/Wishlist.model"
import HttpStatus from 'http-status-codes';


export const addToWishList = async (userID, bookId) => {
    const isWishList = await Wishlist.findOne({ 'userID': userID })
    const searchBook = await Book.findOne({ _id: bookId })
    let updatedWishList
    let temp = false
    const bookDetails = {
        'productID': searchBook._id,
        'description': searchBook.description,
        'bookName': searchBook.bookName,
        'bookImage': searchBook.bookImage,
        'author': searchBook.author,
        'quantity': 1,
        'price': searchBook.price
    }
    if (isWishList) {
        isWishList.books.forEach((x) => {
            if (x.productID == searchBook._id) {
                temp = true;
            }
        })
        if (temp == false) {
            isWishList.books.push(bookDetails)
            console.log("Added to wishlist");
            updatedWishList = await Wishlist.findOneAndUpdate({ userID: userID }, { books: isWishList.books }, { new: true })
            return updatedWishList
        } else {
            return {error: 0, status: HttpStatus.OK, message: "WishList already contains book"};
          
        }

    } else {
        const newWishList = await Wishlist.create(
            {
                userID: userID,
                books: bookDetails
            }
        );
        return newWishList
    }
}

export const removeFromWishList = async (userID, bookId) => {
    const isWishList = await Wishlist.findOne({ 'userID': userID })
    const searchBook = await Book.findOne({ _id: bookId })
    let bookToRemove
    let flag = false
    isWishList.books.forEach((book) => {
        if (book.productID == searchBook._id) {
            bookToRemove = book
            flag = true
        }
    })
if (flag==false) {
    return {error: 0, status: HttpStatus.OK, message: "book already removed."};
}
    let indexValue = isWishList.books.findIndex(x => x == bookToRemove)
    await isWishList.books.splice(indexValue, 1)
    const data = await Wishlist.findOneAndUpdate({ userID: userID },{books:isWishList.books},{new:true})
    return data
}