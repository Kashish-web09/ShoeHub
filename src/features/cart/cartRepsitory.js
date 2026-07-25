import mongoose from "mongoose";
import { cartSchema } from "./cartSchema.js";
import { ApplicationError } from "../../errorFile/applicationError.js";

const cartModels = mongoose.model("cartItems", cartSchema);

export default class cartRepository {

    // Add item or increase quantity if item already exists
    async addItem(productId, userId, quantity) {
        try {
            const qty = Number(quantity) || 1;

            const result = await cartModels.findOneAndUpdate(
                {
                    productId,
                    userId
                },
                {
                    $inc: {
                        quantity: qty
                    }
                },
                {
                    returnDocument: "after",
                    upsert: true
                }
            );

            return result;

        } catch (err) {
            throw new ApplicationError(
                "Something went wrong with the database",
                500
            );
        }
    }


    // Get all cart items for user
    async getItem(userId) {
        try {
            return await cartModels
                .find({ userId })
                .populate("productId");

        } catch (err) {
            throw new ApplicationError(
                "Something went wrong with the database",
                500
            );
        }
    }


    // Delete one cart item
    async deleteCartItem(userId, cartItemId) {
        try {
            return await cartModels.findOneAndDelete({
                _id: cartItemId,
                userId
            });

        } catch (err) {
            throw new ApplicationError(
                "Something went wrong with the database",
                500
            );
        }
    }


    // Clear complete cart
    async clearCart(userId) {
        try {
            return await cartModels.deleteMany({
                userId
            });

        } catch (err) {
            throw new ApplicationError(
                "Something went wrong with the database",
                500
            );
        }
    }


    // Increase quantity
    async increaseQuantity(cartId) {
        try {
            return await cartModels.findByIdAndUpdate(
                cartId,
                {
                    $inc: {
                        quantity: 1
                    }
                },
                {
                    returnDocument: "after"
                }
            );

        } catch (err) {
            throw new ApplicationError(
                "Something went wrong with the database",
                500
            );
        }
    }


    // Decrease quantity
    async decreaseQuantity(cartId) {
        try {
            const cartItem = await cartModels.findById(cartId);

            if (!cartItem) {
                throw new ApplicationError(
                    "Cart item not found",
                    404
                );
            }

            if (cartItem.quantity > 1) {

                return await cartModels.findByIdAndUpdate(
                    cartId,
                    {
                        $inc: {
                            quantity: -1
                        }
                    },
                    {
                        returnDocument: "after"
                    }
                );

            } else {

                return await cartModels.findByIdAndDelete(cartId);

            }

        } catch (err) {
            throw new ApplicationError(
                "Something went wrong with the database",
                500
            );
        }
    }
}