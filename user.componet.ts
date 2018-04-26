import {user} from './user';
import {userService} from './user.service';

export class userComponet {
    us: userService;
    
    constructor(uSvc:userService){
        this.us=uSvc;
        console.log("User Componet Start");
    }
}
let userComp:userComponet = new userComponet(new userService());

let u1: user = new user("cdinh","password","Christopher", "Dinh");
userComp.us.add(u1);
let u2: user = new user("admin","admin","admin", "admin");
userComp.us.add(u2);
let u3: user = new user("user1","password","user", "1");
userComp.us.add(u3);

for (let user of userComp.us.list()){
    console.log(user.about());
}

console.log("Removing Users!!!");
userComp.us.remove(u2.id);

for (let user of userComp.us.list()){
    console.log(user.about());
}