import { Animal } from "./animal";

export class Baleia extends Animal {
    constructor(nome: string) {
        super(nome, "Baleia");
    }

    come(): void {
        console.log(`${this.getNome()} (${this.especie}) está comendo krill.`);
    }

    nada(): void {
        console.log(`${this.getNome()} (${this.especie}) está nadando no oceano.`);
    }

    buscarRecurso(): void {
        console.log(`${this.getNome()} (${this.especie}) está filtrando água para comer .`);
    }

    emitirSom(): void {
        console.log(`${this.getNome()} (${this.especie}) está cantando!`);
    }

    mover(): void {
        console.log(`${this.getNome()} (${this.especie}) está nadando lentamente.`);
    }

    verificarFome(): void {
        console.log(`${this.getNome()} (${this.especie}) está com fome nível ${this.getFome()}.`);
    }
    
}

let baleialeia=new Baleia('Leia')


