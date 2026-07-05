const products=[];

export default class productModels{
constructor(name,price,image,category,id,isBestSeller=false) {
    this.name=name;
    this.price=price;
    this.image=image;
    this.category=category;
    this._id=id;
    this.isBestSeller=isBestSeller
}
}


