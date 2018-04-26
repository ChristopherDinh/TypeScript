import {user} from "./user";

export class userService {
    userList:user[] = [];
    nextId: number=1;
    
    add(user:user):string {
        user.id=this.nextId++;
        this.userList.push(user);
        return "Sucess";
    }
    list(): user[] {
        return this.userList;
    }
    remove(id:number): string {
        let index: number = -1;
        for (let idx:number=0; idx<this.userList.length; idx++){
            if(id==this.userList[idx].id){
                index = idx;
                break;
            }
        }
        this.userList.splice(index,1);
        return "Removed";
    }
    
}