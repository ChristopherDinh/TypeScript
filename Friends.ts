export class Friends {
    Name: string;
    Age: number;
    Email: string;
    BestFriend: boolean;
    
   constructor(Name: string, Age: number, Email: string, BestFriend: boolean) {
       this.Name=Name;
       this.Age=Age;
       this.Email=Email;
       this.BestFriend=BestFriend;
   } 
    about(): string {
        return `Friends: Name=${this.Name}, Age=${this.Age}, Email=${this.Email}, BestFriend=${this.BestFriend?"Yes":"No"}`;
    }
}