

export default class productDetailModels{
    constructor(
        name,
        brand,
        category,
        price,
        stock,
        images,
        desc,
        features,
        rating,
        sellerId,
        isBestSeller
    ) {
        this.name=name;
        this.brand=brand;
        this.category=category;
        this.price=price;
        this.stock=stock;
        this.images=images;
        this.desc=desc;
        this.features=features;
        this.rating=rating;
        this.sellerId=sellerId;
        this.isBestSeller=isBestSeller;
        this.createdAt=new Date();
this.updatedAt=new Date();
    }
}