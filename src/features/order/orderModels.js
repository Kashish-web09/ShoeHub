
export default class orderModels{
    constructor(userId,items,totalAmount,shippingAddress,paymentMethod,paymentStatus,orderStatus) {
        this.userId=userId;
        this.items=items;
        this.totalAmount=totalAmount;
        this.shippingAddress=shippingAddress;
        this.paymentMethod=paymentMethod;
        this.paymentStatus=paymentStatus;
        this.orderStatus=orderStatus;
        this.createdAt=new Date();
    }
}