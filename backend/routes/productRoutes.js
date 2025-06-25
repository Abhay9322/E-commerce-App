import express from 'express';
import {
     getProducts,
     addProduct,
     deleteProduct,
     editProduct
    
 } from '../controllers/productController.js';

 const router = express.Router();

 router.get('/',getProducts);
 router.post('/',addProduct);
 router.delete('/:id',deleteProduct);
 router.put('/:id',editProduct);
 
 export default router;