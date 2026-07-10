export default class SellerProductModel {
    constructor(
        
        name,
        brand,
        category,
        gender,
        desc,
        price,
        stock,
        images,
        thumbnail,
        color,
        size,
        rating,
        isBestSeller,
        sellerId
    ) {
        this.name = name;
        this.brand = brand;
        this.category = category;
        this.gender=gender
        this.desc = desc;

        this.price = price;

        this.stock = stock;

        this.images = images;          // Array of image URLs
        this.thumbnail = thumbnail;    // Main image

        this.color = color;            // Array or String
        this.size = size;              // Array or String

        this.rating = rating;

        this.isBestSeller = isBestSeller;
this.sellerId=sellerId;

        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}