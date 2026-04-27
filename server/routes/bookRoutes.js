import {Router} from 'express'
import { addBook, deleteBook, getAllBook, getBook, updateBook } from '../controllers/bookController.js';

const bookRouter = Router();

bookRouter.post('/addbook',addBook);
bookRouter.get('/getBooks',getAllBook);
bookRouter.get('/getSingleBook/:id',getBook);
bookRouter.put("/updateBook/:id",updateBook);
bookRouter.delete("/deleteBook/:id",deleteBook);

export default bookRouter;