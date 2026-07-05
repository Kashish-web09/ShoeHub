import { getDb } from "../../../config/mongoDb.js";
import { ApplicationError } from "../../../errorFile/applicationError.js";

export default class sellerOrderRepo{
    constructor(){
        this.collection="orders"
    }
   async getSellerOrders(){}

async getOrderById(orderId){}

async updateOrderStatus(orderId, status){}

async cancelOrder(orderId){}

async updateTracking(orderId, trackingNumber, courier){}

async getPendingOrders(){}

async getDeliveredOrders(){}

async getCancelledOrders(){}

// async searchOrders(keyword){}

// async filterOrders(status){}

// async exportOrders(){}

}