import Cart from "../models/Cart.model"
const { isValidObjectId } = require('mongoose');
import { getBook } from "./book.service"
import Book from "../models/Book.model"
export const addBook = async (userID, bookId) => {

   if (!isValidObjectId(bookId)) {
      console.log('Invalid ObjectId');
      throw new Error("Book Not found");
   }
   const searchBook = await getBook(bookId)
   if (!searchBook) {
      return "Book Not found"
   }
   if (searchBook.quantity < 1) {
      throw new Error("Book is not available right now !!!")
   }
   const existingCart = await Cart.findOne({ 'userID': userID })

   let totalOfBooks = 0
   let total
   let quantity
   let bookFound = false
   let bookDetailsInput = {
      'productID': searchBook._id,
      'description': searchBook.description,
      'bookName': searchBook.bookName,
      'bookImage': searchBook.bookImage,
      'author': searchBook.author,
      'quantity': 1,
      'price': searchBook.price
   }
   if (existingCart) {

      total = existingCart.cartTotal
      existingCart.books.forEach(book => {
         if (book.productID == bookId) {
            bookFound = true
            quantity = book.quantity
            book.quantity = quantity + 1
            total = total + book.price
         }
      });
      if (bookFound == false) {
         existingCart.books.push(bookDetailsInput)
         // existingCart.books.forEach(book => {
         //    total = total + book.price
         // })
         total = total + searchBook.price
         console.log("Inserted succesfully");
      }

      let cart1 = await Cart.findOneAndUpdate({ userID: userID }, { books: existingCart.books, cartTotal: total }, { new: true })
      let bookData = await Book.findById(bookId)
      let quantityOfBookStore = bookData.quantity
      console.log(quantityOfBookStore, "Qunatuu");
      await Book.findByIdAndUpdate({ '_id': bookId }, { quantity: quantityOfBookStore - 1 })
      return cart1
   } else {
      const newCart = await Cart.create({
         userID: userID
         ,
         books: [bookDetailsInput]
         ,
         cartTotal: searchBook.price
      })
      console.log("created cart", newCart);
      return newCart
   }

}

export const decreaseQuantityOfBook = async (userID, bookId) => {
   let price
   let quantity
   let cart = await Cart.findOne({ 'userID': userID })
   let cartTotal = cart.cartTotal

   cart.books.forEach((x) => {
      if (x.productID == bookId) {
         price = x.price
         quantity = x.quantity
         x.quantity = quantity - 1
      }
   })
   let updateTotal = cartTotal - price
   if (updateTotal < 0) {
      throw Error("Cart Value should not be below 0.")
   }

   if (quantity - 1 < 0) {
      throw Error("Quantity should not be below 0.")
   }
   const data = await Cart.findOneAndUpdate({ userID: userID }, { books: cart.books, cartTotal: updateTotal }, { new: true })
   return data
}

export const removeBook = async (userID, bookId) => {
   let bookToRemove
   let quantity
   let price
   let updateCartTotal
   let cart = await Cart.findOne({ 'userID': userID })

   let cartValue = cart.cartTotal
   cart.books.forEach((x) => {
      if (x.productID = bookId) {
         quantity = x.quantity
         console.log("QQQ", quantity);
         price = x.price
         console.log("PPP", price);
         bookToRemove = x
      }
   })

   updateCartTotal = cartValue - quantity * price

   let indexValue = cart.books.findIndex(x => x == bookToRemove)
   cart.books.splice(indexValue, 1)
   const data = await Cart.findOneAndUpdate({ userID: userID }, { books: cart.books, cartTotal: updateCartTotal }, { new: true })
   return data
}

export const purchaseBook = async (userID) => {
   const userCart = Cart.findOneAndUpdate({ '_id': userID }, { isPurchased: true }, { new: true })
   return userCart
}