export class bowling {
    first: number;
    second: number;
    score: number;
    
    constructor(first: number,second: number, score: number){
        this.first= first;
        this.second=second;
        this.score= score;
    }
    
    about(): string {
        return `Throw 1: first=${this.first}, Throw 2: second=${this.second}, score=${this.first+this.second}`;
    }
    
    
}