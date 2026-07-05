import  productRepository  from "./productRepository.js";
import  productModels  from "./productModels.js";

export default class productController{
    constructor(){
        this.productRepository=new productRepository();
    }
    async addProduct(req,res,next){
try {
    const {name,price,category}=req.body;
    const newProduct=new productModels(
        name,
        parseFloat(price),
        req.file ? req.file.filename :null,
        category,
        !req.body.isBestSeller
    )
    const result=await this.productRepository.addProduct(newProduct);
    res.status(201).json(result);
} catch (err) {
next(err)    
}
    }
    async getAll(req,res,next){
try {
        const products=await this.productRepository.getAllProduct();
    res.status(201).render("products",{
        title:products,
        products
    });

} catch (err) {
    console.log(err)
next(err)    
    
}

    }
    async getOne(req,res,next){
try {
    const id=req.params.id;
    const product=await this.productRepository.getOneProduct(id);
    if(!product){
        res.status(400).send("Product not found")
    }
    return res.status(200).send(product);

} catch (err) {
next(err)    
    
}

    }
    async rateProducts(req,res,next){
try {
    const userId=req.userId;
    const productId=req.body.productId;
    const rating=req.body.rating;
    await this.productRepository.rateproduct(
        productId,
        userId,
        rating
    );
    res.status(200).json({
        success:true,
        message:"Rating added"
    })
} catch (err) {
next(err)    
    
}

    }
    async filterproducts(req,res,next){
try {
    const {minPrice,maxPrice,category}=req.query;
    const result=await this.productRepository.filterProduct(minPrice,maxPrice,category);
    res.status(200).json(result);
    
} catch (err) {
next(err)    
    
}

    }
    async deleteProducts(req,res,next){
        try {
    const result=await this.productRepository.deleteProductById(req.params.id);
    return res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    });
} catch (err) {
next(err)    
    
}

    }
    async home(req,res,next){
        try {
            const products=await this.productRepository.getHomeProducts();
            const bestSeller=await this.productRepository.getBestSellerProducts();
            res.render("index",{
                title:"Home",
                products,
                bestSeller
            })
        } catch (err) {
            next(err)
        }
    }
    
}