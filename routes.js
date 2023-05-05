const express = require('express');
const routes = express.Router();
const { Inventory } = require('./models');
const ApiError = require('./ApiError');

routes.post('/product', async (req, res) => {
    const body = req.body;
    console.log(body);
    try{

        body.forEach(async productBody => {
            const {productId, quantity, operation} = productBody;
            let inventory = 0;
            let product = await Inventory.findOne({productId}, { inventory});
            if(operation === 'add'){
                product.inventory = product.inventory + quantity;
            }else if(operation === 'substract'){
                let temp = product.inventory + quantity;
                if(temp >= 0){
                    product.Inventory = temp;
                } else{
                    throw new ApiError(400, 'Inventory cannot be negative');
                }
            }
            await product.update();
        });
        res.status(200).send({sttausCode: 200, message: 'Quantity has been updated successfully'});
    }catch(err){
        throw err;
    }
});

module.exports = routes;