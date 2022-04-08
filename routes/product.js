const express = require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const productController =require('../controller/product')

router.get('/products',auth.authorizedUserAdmin, productController.getAllproducts)
router.post('/add-products', auth.authorizedAdmin, productController.addProduct)
router.put('/edit-products',auth.authorizedAdmin, productController.editProduct)
router.delete('/delete-products', auth.authorizedAdmin,productController.deleteProduct)

module.exports = router;