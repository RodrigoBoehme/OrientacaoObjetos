import { magicCreatures } from "./magicCreatures";

export class Sereia extends magicCreatures{

    constructor(nome:string,poder:number){
        super(nome,'Sereia',poder)
    }

    castSpell(): number {
        return this.power
    }
}