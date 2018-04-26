import {ball} from './ball';

export class ballService {
    ballList:ball[] = [];
    nextId: number =1;
    
    add(ball:ball): string {
        ball.id = this.nextId++;
        this.ballList.push(ball);
        return "sucess";
    }
    list(): ball[] {
        return this.ballList;
    }
    
    remove(id: number): string {
        let index: number = -1;
        for (let idx:number =0; idx < this.ballList.length; idx++) {
            if(id == this.ballList[idx].id){
            index = idx;
            break;
            }
        }
        this.ballList.splice(index,1);
        return "Removed";
    }
    
}