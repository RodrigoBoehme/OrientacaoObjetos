import { magicCreatures } from "./magicCreatures";

export abstract class guardian extends magicCreatures{

    castSpell(): number {
        return this.power
    }
    abstract protectSecret()
}