const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/add-product', adminController.postAddProduct);

// router.get('/products', adminController.getProducts);

// router.post('/edit-product', adminController.postEditProduct);

// router.post('/delete-product', adminController.postDeleteProduct);

module.exports = router;