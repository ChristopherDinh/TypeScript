export class game {
    die:number;
    total:number;
    rolls:number;
    average:number;
    
    constructor(die:number, total:number, rolls:number, average:number){
        this.die=die;
        this.total=total;
        this.rolls=rolls;
        this.average=average;
    }
    about():string {
        return `Pig Dice: Total Score=${this.total}, Number of Rolls=${this.rolls}, Average Score per Roll=${this.average}`
    }
}