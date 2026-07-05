import { getDb } from "../../config/mongoDb.js";
import { ApplicationError } from "../../errorFile/applicationError.js";
export default class productDetailRepo{
    constructor(){
        this.collection="productDesc";
    }

   async addProduct(product) {}

  async  getAllProducts() {}

   async getProductById(id) {}

   async getProductsBySeller(sellerId) {}

   async updateProduct(id, updatedProduct) {}

   async deleteProduct(id) {}

  async  searchProducts(keyword) {}

   async filterProducts(filters) {}

   async getProductsByCategory(category) {}

   async getBestSellerProducts() {}

  async  getRelatedProducts(category, productId) {}

  async  increaseStock(id, qty) {}

  async  decreaseStock(id, qty) {}

   async toggleBestSeller(id) {}


}
