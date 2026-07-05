
import wishModels from "./wishlistModels.js";
import wishRepository from "./wishlistRepository.js";


export default class wishcontroller{
    constructor(){
        this.wishRepository=new wishRepository();
    }
async addItem(req,res,next){
    try {
        const userId=req.userId;
        const {productId}=req.body;
        const result=await this.wishRepository.addItem(productId,userId);
        res.redirect('/api/wishlist')
    } catch (err) {
        next(err)
    }
}
async getItem(req,res,next){
    try {
        const userId=req.userId;
        const items=await this.wishRepository.getItem(userId);
        return res.render('wishlist',{
            items
        })
    } catch (err) {
        next(err)
    }
}
async deleteItem(req,res,next){
    try {
        const userId=req.userId;
        const wishlistItemId=req.params.id;
        const result=await this.wishRepository.deleteItem(userId,wishlistItemId);
        if(result.deletedCount===0){
                            return res.status(404).send("Item not found")

        }
        return res.redirect('/api/wishlist')
    } catch (err) {
        next(err)
    }
}
}