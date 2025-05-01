import { Casa } from "./casa";
import { magicCreatures } from "./magicCreatures";

export class wizard extends magicCreatures{

    varinha:string
    casa:Casa
    habilidades:object

    constructor(namae:string,pauwa:number,casa:Casa){
        super(namae,'Bruxo',pauwa)
        this.casa=casa
        casa.adicionarParticipantes(this)
    }
    castSpell(): number {
        
        return this.power
    }
    spellCasting():number{
        console.log(`${this.name} has cast a spell with a power of ${this.power}`)
        return this.power
    }

}

const brujo=new wizard('namae',100,new Casa('nameless',[]))

