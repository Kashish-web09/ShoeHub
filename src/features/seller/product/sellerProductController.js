import SellerProductModel from "./sellerProductModels.js";
import SellerProductRepo from "./sellerProductRepository.js";
export default class SellerProductController{
    constructor(){
        this.SellerProductRepo=new SellerProductRepo();
    }

        async getAddProductPage(req,res,next){
try{
    res.render('seller/addProduct',{
    title:"Add Product",
    errors:{}
    
})
} catch(err){
next(err)
}   
}

    async getProducts(req,res,next){
        try {
            const sellerId=req.sellerId;
            const result=await this.SellerProductRepo.getAllProducts(sellerId);
            res.render("seller/products",{
                title:"Seller Product page",
                products:result,
                gender:"",
                category:"",
                price:""
            })
        } catch (err) {
            next(err)
        }
    }
    async add(req,res,next){
               try {
const {
    
    name,
    brand,
    category,
    gender,
    desc,
    price,
    stock,
    color,
    size,
    isBestSeller,
    
} = req.body;
                const images=req.files? req.files.map(file=>file.filename):[];
                const thumbnail=images.length>0? images[0]:null;
                const colors=color ? color.split(",").map(s=>s.trim()):[];
                const sizes=size?size.split(",").map(s=>s.trim()):[];
                const sellerId=req.sellerId;
    const newData=new SellerProductModel(
        name,
        brand,
        category,
        gender,
        desc,
        Number(price),
        Number(stock),
images,
thumbnail,
colors,
sizes,
0,
isBestSeller==="true",
sellerId

    );
    const result=await this.SellerProductRepo.addProduct(newData);
res.redirect('/api/seller/product');
        } catch (err) {
            next(err)
        }

    }
    async getEditPage(req,res,next){
try {
    const productId=req.params.id;
    const sellerId=req.sellerId
    const product=await this.SellerProductRepo.getProductById(productId,sellerId);
    res.render("seller/editProduct",{
        title:"Edit Product",
        product,

    })
} catch (err) {
    next(err)
}
    }
    async updateProduct(req,res,next){
try {
    const productId=req.params.id;
    const {name,brand,category,gender,price,stock,desc,size,isBestSeller}=req.body;
    const updatedProduct={
        name,
        brand,
        category,
        gender,
        price:Number(price),
        stock:Number(stock),
        desc,
        size,
        isBestSeller
    }
    await this.SellerProductRepo.updateProduct(productId,updatedProduct)
    res.redirect("/api/seller/product");
} catch (err) {
    next(err)
}
    }
    async deleteProduct(req,res,next){
try{   
       const productId=req.params.id;
       const sellerId=req.sellerId
       const product=await this.SellerProductRepo.getProductById(productId,sellerId);
       if(!product){
        return res.status(400).send("Product not found")
       }

      await this.SellerProductRepo.deleteProduct(productId);
      return res.redirect("/api/seller/product")
}catch(err){
    next(err)
}
    }
    async getOutOfStock(req,res,next){
        try {
            const sellerId=req.sellerId;
            const product=await this.SellerProductRepo.getOutOfStockProduct(sellerId)
            res.render("seller/outOfStockProducts",{
                products:product,
                seller:req.seller
            })
        } catch (err) {
            next(err)
        }
    }
    async getProductDetails(req,res,next){
        try {
            const productId=req.params.id;
            const sellerId=req.sellerId;
            const product=await this.SellerProductRepo.getProductById(productId,sellerId);
            if(!product){
return res.status(404).send("Product not found")
            }
            res.render("seller/productDetails",{
                title:"Product Details",
                product
            })
        } catch (err) {
            next(err)
        }
    }
        async filterProduct(req,res,next){
try {
const {gender="",category="",price=""}=req.query;
const products=await this.SellerProductRepo.filterProduct(gender,category,price);
return res.render("seller/products",{
    products,
    gender,
    category,
    price
})
} catch (err) {
    throw new ApplicationError("Somthing went wrong with the database",500)
}

    }

}