import sellerOrderRepo from "./orderRepository.js";
import sellerOrderModel from "./orderModels.js";


export default class sellerOrderController{
    constructor() {
        this.sellerOrderRepo=new sellerOrderRepo();
    }
async getOrders(){}

async getOrderDetails(){}

async changeOrderStatus(){}

async cancelOrder(){}

async updateTracking(){}


}
