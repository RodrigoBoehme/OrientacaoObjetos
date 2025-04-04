import { Animal } from "./Animal";


export class Cachorro extends Animal{
    fazerBarulho(): void {
        console.log(`${this.nome} Late`)
    }
}

let myDoggo=new Cachorro("Tobby")
myDoggo.fazerBarulho()