const mongoose = require('mongoose');
const { Schema, model } = mongoose;
try{
    (async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Database is connected');
    })()
}catch(err){
    console.log(err);
}

const InventorySchema = new Schema({
    productId: Number,
    quantity: Number
});

const Inventory = model('Inventory', InventorySchema);

module.exports = {
    Inventory
}