import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    category:{type:String,required:true,enum:["STORY","SCIENCE","NOBAL","ACCOUNTING","ENGINEERING"]},
    isbn:{type:String,unique:true},
    totalCopies:{type:Number,required:true,min:1},
    availableCopies:{type:Number,required:true,min:0},
    status:{type:String,enum:["AVAILABLE","OUT OF STOCK"],default:"AVAILABLE"},
    publisher:{type:String},
    publishYear:{type:Number},
    description:{type:String},
    coverImage:{type:String},
    
},{timestamps:true});



const Book = mongoose.model("Book",bookSchema)

export default Book;