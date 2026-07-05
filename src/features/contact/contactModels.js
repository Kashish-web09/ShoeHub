

export default class contactModels{
    constructor(name,email,message){
this.name=name;
this.email=email;
this.message=message;
this.status="Pending";
this.createdAt=new Date();
    }
}