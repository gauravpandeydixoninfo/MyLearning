import mongoose from "mongoose";
var Schema = mongoose.Schema;
const productModel= new Schema({
    name: String,
    dep: String

});
// export const Product =mongoose.model("products", productModel);
export const Product = mongoose.models.products || mongoose.model("products", productModel);
// const UserModel = models.User || model<IUser>('products', productModel); 
// const data=mongoose.models.products ?? mongoose.model('products', productModel);
// mongoose.model('Profile', profileSchema); 
// export default products;
// exports=data;