const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  products: 
    [
      {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product",
          required: true,
        },
        
      ],
      // quantity: { type: Number, required: true, default: 1 } ,
  userId : {type:mongoose.Schema.Types.ObjectId,required:true}
  
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
