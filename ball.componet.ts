import {ball} from './ball';
import {ballService} from './ball.service';

export class ballComponet {
    ballSvc: ballService;
    
    constructor(bSvc: ballService) {
        this.ballSvc = bSvc;
        console.log("Ball Componet Initialize");
    }
}
let ballComp: ballComponet = new ballComponet(new ballService());
    
let b1: ball = new ball("blue","small");
ballComp.ballSvc.add(b1);
let b2: ball = new ball("red","large");
ballComp.ballSvc.add(b2);
let b3: ball = new ball("green","small");
ballComp.ballSvc.add(b3);

for (let ball of ballComp.ballSvc.list()) {
    console.log(ball.about());
}

console.log("remove an item");
ballComp.ballSvc.remove(b2.id);

for (let ball of ballComp.ballSvc.list()) {
    console.log(ball.about());
}

