import { magicCreatures } from "./magicCreatures";

export class Phoenix extends magicCreatures{

    constructor(nome:string,poder:number){
        super(nome,'Phoenix',poder)
    }
    castSpell(): number {
        return this.power
    }
}