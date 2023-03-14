import Books from "../models/Book.model";


//getAll
export const getAllBooks = async (body) => {
    const data = await Books.find();
    return data;
};


//getOneUser
export const getBook = async (id) => {
    const data = await Books.findOne({_id:id})
    return data
}