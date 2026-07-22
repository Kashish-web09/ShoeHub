export default class userModel{
    constructor(name,email,password,image) {
        this.name=name;
        this.email=email;
        this.password=password;
        this.image=image;
        this.createdAt=new Date();
        this.updatedAt=new Date();
    }
}
