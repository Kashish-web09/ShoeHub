
export class ApplicationError extends Error{
    constructor(errMessage,errStatus) {
        super(errMessage)
        this.errStatus=errStatus;
    }
}