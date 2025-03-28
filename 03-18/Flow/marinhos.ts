import { Animal } from "./animal";

export class Baleia extends Animal {
    constructor(nome: string) {
        super(nome, "Baleia");
    }

    private come(): void {
        this.fome += 5
        console.log(`${this.getNome()} (${this.especie}) está comendo krill.  (Fome: ${this.fome})`);
    }

    private nada(): void {
        this.fome--
        console.log(`${this.getNome()} (${this.especie}) está nadando no oceano. (Fome: ${this.fome})`);
    }

    private buscarRecurso(): void {
        this.fome += 2
        console.log(`${this.getNome()} (${this.especie}) está filtrando água para comer . (Fome: ${this.fome})`);
    }

    private emitirSom(): void {
        this.fome--
        console.log(`${this.getNome()} (${this.especie}) está cantando! (Fome: ${this.fome})`);
    }

    private mover(): void {
        this.fome -= 2
        console.log(`${this.getNome()} (${this.especie}) está nadando lentamente. (Fome: ${this.fome})`);
    }

    verificarFome(): void {
        console.log(`${this.getNome()} (${this.especie}) está com fome nível ${this.getFome()}.`);
    }

    acaoAleatoria(): void {
        let opcean = Math.floor(Math.random() * 6 + 1)

        if (this.fome <= 20) { this.come() }
        else {
            if (opcean === 3) { this.emitirSom() }

            if (opcean === 1) { this.mover() }

            if (opcean === 4) { this.buscarRecurso() }

            if (opcean === 2) { this.come() }

            if (opcean === 5) { this.nada() }

            if (opcean === 6) { this.verificarFome() }
        }
    }

    interagir(sla: Animal): void {
        console.log(`${this.getNome()}(${this.especie}) molhou  ${sla.getNome()} (${sla.getSpecie()})`);
        this.fome--
    }

}

//let baleialeia=new Baleia('Leia')


