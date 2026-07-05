export default class sellerOrderModel {
  constructor(
    userId,
    items,
    shippingAddress,
    paymentMethod,
    paymentStatus,
    orderStatus,
    subtotal,
    shippingCharge,
    totalAmount,
    createdAt = new Date(),
    updatedAt = new Date()
  ) {
    this.userId = userId;

    this.items = items;

    this.shippingAddress = shippingAddress;

    this.paymentMethod = paymentMethod;

    this.paymentStatus = paymentStatus;

    this.orderStatus = orderStatus;

    this.subtotal = subtotal;

    this.shippingCharge = shippingCharge;

    this.totalAmount = totalAmount;

    this.createdAt = createdAt;

    this.updatedAt = updatedAt;
  }
}