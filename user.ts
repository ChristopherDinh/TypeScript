export class user {
    id:number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    
    constructor(userName: string, password:string, firstName:string, lastName:string){
        this.userName= userName;
        this.password= password;
        this.firstName= firstName;
        this.lastName= lastName;
    }
    about(): string {
        return `ID = ${this.id}, User Name = ${this.userName}, Password = ${this.password}, First Name = ${this.firstName}, Last Name = ${this.lastName}`;
    }
    
}