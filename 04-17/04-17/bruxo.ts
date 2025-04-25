import { magicCreatures } from "./magicCreatures";

export class wizard extends magicCreatures{
    castSpell(): number {
        
        return this.power
    }
    spellCasting():number{
        console.log(`${this.name} has cast a spell with a power of ${this.power}`)
        return this.power
    }
}