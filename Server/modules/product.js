import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    id:{type:String, required:true, unique: true},
    url:{type:String},
    detailUrl:{type:String},
    title:{type:Object},
    price:{type:Object},
    quantity:{type:Number},
    description:{type:String},
    discount: {type:String},
    tagline:{type:String},
    author:{type:String},
    seller:{type:String},
    type:{type:[String]}
})

//Creating Collection
const Product = mongoose.model("product", productSchema);
export default Product;