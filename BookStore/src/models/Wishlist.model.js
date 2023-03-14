import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema(
    {
        userID: {
            type: String
        },
        books: [{
            productID: {
                type: String
            },
            description: {
                type: String
            },
            bookName: {
                type: String
            },
            bookImage: {
                type: String
            },
            author: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            },
            price: {
                type: Number
            }
        }]
    }
)

export default model('wishlist', wishlistSchema);