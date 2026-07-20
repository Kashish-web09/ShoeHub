import productDetailRepo from "./productDetailsRepository.js";
import productDetailModels from "./productDetailsModels.js";

export default class productDetailController{
    constructor(){
        this.productDetailRepo=new productDetailRepo();
    }






async getAllProducts(req,res,next){
try {
    const {productId}=req.params;
    const product=await this.productDetailRepo.getAllProducts(productId);
    return res.render("productDetails",{
        title:"Product Details",
        product
    })
} catch (err) {
    next(err)
}
}
async getProductById(req,res,next){

    try {

        const productId = req.params.id;

        const product = await this.productDetailRepo.getProductById(productId);


        if(!product){
            return res.status(404).send("Product not found");
        }


        if(product.ratings && product.ratings.length > 0){

            let total = 0;

            product.ratings.forEach((item)=>{
                total += item.rating;
            });

            product.rating = (total / product.ratings.length).toFixed(1);

        }
        else{
            product.rating = 0;
        }


        res.render("productDetails",{
            product
        });


    } catch(err){
        next(err);
    }

}
}