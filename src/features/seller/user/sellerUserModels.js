export default class sellerUserModels{

    constructor(
        name,
        email,
        phone,
        password,
        storeName,
        address,
        city,
        state,
        pincode,
        gstNumber,
        profileImage
    ){

        this.name = name;
        this.email = email;
        this.phone = Number(phone);

        this.password = password;

        this.role = "seller";

        this.storeName = storeName;

        this.address = address;
        this.city = city;
        this.state = state;
        this.pincode = pincode;

        this.gstNumber = gstNumber;
this.profileImage=profileImage;

        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

}