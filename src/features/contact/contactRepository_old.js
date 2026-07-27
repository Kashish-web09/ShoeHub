import { getDb } from "../../config/mongoDb.js";
import { ApplicationError } from "../../errorFile/applicationError.js";

export default class contactRepository{
    constructor() {
        this.collection="feedback"
    }
    async submitContactForm(contact){
                try {
            const db=getDb();
            const collection=db.collection(this.collection)
            await collection.insertOne(contact)
        } catch (err) {
            throw new ApplicationError("Something went wrong with db",500)
        }

    }
}