export class User{
            id!:number
            name!:string
            email!:string
            password!:string
           phone!:string
    constructor(
            id:number,
           Name:string,
            email:string,
            password:string,
            phoneNumber:string
    ){
        this.id=id;
        this.name=Name;
        this.email=email;
        this.password=password;
        this.phone=phoneNumber;
    }
}