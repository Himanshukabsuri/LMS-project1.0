

// add book

import Book from "../models/bookModels"

export const addBook = async(req,res)=>{
    try {
        const book = await Book.create(req.body);
        res.status(201).json({success:true,book})
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// get all books

export const getAllBook = async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
}