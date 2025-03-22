import { Level } from "./levels";

export class survivor{
    protected level:Level
    
    constructor(levelconst:Level=Level.blue){
        this.level=levelconst
    }

    getLevel():Level{return this.level}
}