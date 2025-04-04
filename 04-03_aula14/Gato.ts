import { Animal } from "./Animal";

export class Gato extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} miou`)
    }
}

let gato=new Gato('Pantera')

gato.fazerBarulho()