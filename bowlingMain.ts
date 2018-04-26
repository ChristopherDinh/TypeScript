import {bowling} from './bowling';
var score:number;
let frames:bowling[];  
for (let i = 0; i = 10; i++){
    let x: number = Math.random() * 11;
    let y: number = Math.random() * 11;
    
    if (x + y > 10) {
    let x: number = Math.random() * 11;
    let y: number = Math.random() * 11;
        break;
    }
    else if (x + y == 10 && x == 10){
        score = x + y;
        let i:bowling = new bowling(10,0,score);
    }
    else if (x + y == 10){
        score = score + score;
        let i:bowling = new bowling(x,y,score);
    }
}
for (let j of frames){
    console.log(j.about());
}

