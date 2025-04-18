import { magicCreatures } from "./magicCreatures";

export class Unicorino extends magicCreatures{

    castSpell(): number {
        return this.power
    }
}