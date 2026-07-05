import productDetailRepo from "./productDetailsRepository.js";
import productDetailModels from "./productDetailsModels.js";

export default class productDetailController{
    constructor(){
        this.productDetailRepo=new productDetailRepo();
    }
    async addProduct(){}

async showAddProduct(){}

async showSellerProducts(){}

async showEditProduct(){}

async updateProduct(){}

async deleteProduct(){}

async showProductDetails(){

}

async showAllProducts(){}

async searchProducts(){}

async filterProducts(){}

async getProductsByCategory(){}
}