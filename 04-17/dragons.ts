import { magicCreatures } from "./magicCreatures";

export class Dragon extends magicCreatures{
    
    constructor(name:string,poder:number){
        super(name,'Dragon',poder)
    }
    castSpell(): number {
        return this.power
    }
}