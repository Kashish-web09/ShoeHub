
export default class checkoutModels{
    constructor(userId,items,totalAmount,shippingAddress,city,state,pincode,phone,paymentMethod,paymentStatus,orderStatus){
      this.userId=userId;
      this.items=items;
      this.totalAmount=totalAmount;
      this.shippingAddress=shippingAddress;
      this.city=city;
      this.state=state;
      this.pincode=pincode;
      this.phone=phone;
      this.paymentMethod=paymentMethod;
      this.paymentStatus=paymentStatus;
      this.orderStatus=orderStatus
    }
}
let checkout=[];