import { ApplicationError } from "../../errorFile/applicationError.js";
import { getDb } from "../../config/mongoDb.js";


export default class checkOutRepository{
    constructor() {
        this.collection="checkout"
    }
    async createOrder(order){
        try {
            const db=getDb();
            const collection=db.collection(this.collection)
        } catch (err) {
            throw new ApplicationError("Something went wrong with db",500)
        }
    }
    async getOrderByUserId(userId){
                try {
            const db=getDb();
            const collection=db.collection(this.collection)
        } catch (err) {
            throw new ApplicationError("Something went wrong with db",500)
        }

    }

    async getOrderById(orderId){
                try {
            const db=getDb();
            const collection=db.collection(this.collection)
        } catch (err) {
            throw new ApplicationError("Something went wrong with db",500)
        }

    }
    async updateOrderStatus(orderId,status){
                try {
            const db=getDb();
            const collection=db.collection(this.collection)
        } catch (err) {
            throw new ApplicationError("Something went wrong with db",500)
        }

    }
    async cancleOrder(orderId){
                try {
            const db=getDb();
            const collection=db.collection(this.collection)
        } catch (err) {
            throw new ApplicationError("Something went wrong with db",500)
        }

    }
}