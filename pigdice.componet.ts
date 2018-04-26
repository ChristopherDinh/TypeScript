import {game} from './game';

let g1:game = new game(0,0,0,0);
g1.die = (Math.floor(Math.random() * 6)) + 1;

let two:number = 0;
let three:number = 0;
let four:number = 0;
let five:number = 0;
let six:number = 0;

while (g1.die != 1){
    
    g1.total = g1.die + g1.total;
    g1.rolls= g1.rolls + 1;
    g1.average= Math.round(g1.total/g1.rolls);
   
    if (g1.die ==2){
        two +=1;
    }else if (g1.die ==3){
        three+=1;
    }else if (g1.die ==4){
        four+=1;
    }else if (g1.die ==5){
        five+=1;
    }else if (g1.die ==6){
        six+=1;
    }
     g1.die = (Math.floor(Math.random() * 6))+1;
}
console.log(g1.about());
console.log("Number of two's rolled =" + two+ "\nNumber of three's rolled =" + three+ "\nNumber of four's rolled =" + four + "\nNumber of five's rolled =" + five+"\nNumber of six's rolled =" + six);

