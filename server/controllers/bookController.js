

// add book

import Book from "../models/bookModels.js"

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
        const {search , category} = req.query;

        let query = {};

        if (search) {
            query.$or = [
                {title:search},
                {author:search},
            ]
        }

        if (category) {
            query.category = category;
        }

        const books = await Book.find(query);
        res.status(201).json({success:true,book})
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// get single book

export const getBook = async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);

        if(!book) return res.status(404).json({message:"Book not found"})

        res.status(200).json({ success: true, book });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// update book

export const updateBook = async(req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        )
        if(!book) return res.status(404).json({message:"Book not found"})

        res.status(200).json({ success: true,message:"Book is update"});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

// delete book

export const deleteBook = async(req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id)
        if(!book) return res.status(404).json({message:"Book not found"})

        res.status(200).json({ success: true,message:"Book is delete" });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}