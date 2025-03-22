import { Animal } from "./Animal";
import { Baleia } from "./Marinhos";

/*// Função de simulação do ambiente
function simularAmbiente(animais: Animal[], tempoSimulacao: number): void {
    const animal1 = animais[Math.floor(Math.random() * animais.length)];
    const animal2 = animais[Math.floor(Math.random() * animais.length)];


    for (let t = 0; t < tempoSimulacao; t++) {
        console.log(`\n--- um peixe se uniu ao cardume, agora são ${t + 1} ---\n Nivel de fome:${animal1.getFome()}`);
    }
   
}

// Criando animais para o teste

const animalAquatico = new Baleia("Baleia Baleia Baleia", "Pexi pexi pexi");

// Lista de animais no ambiente
const animais: Animal[] = [animalAquatico];

// Simulando o ambiente por 3 ciclos de tempo
simularAmbiente(animais, 20);
[20:34, 18/03/2025] Ryan Senac: export class Animal {
    private nome: string;
    protected especie: string;
    private fome: number;



    constructor(nome: string, especie: string) {
        this.nome = nome;
        this.especie = especie;
        this.fome = Math.floor(Math.random()*100);

    }
    getNome(): string { 
       
        return this.nome }
    getFome():number{ 
       
      if (this.fome<=1){return this.fome}else{this.fome--; return this.fome}
    
         
        }


}
*/
let a = new Baleia('hd', 1080)
let b = new Animal('sd', 240)

function interagir(animal1: Animal, animal2: Animal) {
    console.log(`${animal1.getNome()} interagiu com ${animal2.getNome()}`)

}
interagir(a, b)
interagir(b, a)
a.eat(20)
b.eat(20)
function funcaorandom(animal: Animal) {
    let opcao = Math.floor(Math.random() * 5 + 1)

    if (opcao = 1) {
        animal.eat(20)

        return
    }
    else {
        console.log(animal.getNome())
        return
    }
}

funcaorandom(a)