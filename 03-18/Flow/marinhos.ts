import { Animal } from "./animal";

export class Baleia extends Animal {
    constructor(nome: string) {
        super(nome, "Baleia");
    }

    private come(): void {
        console.log(`${this.getNome()} (${this.especie}) está comendo krill.`);
    }

    private nada(): void {
        console.log(`${this.getNome()} (${this.especie}) está nadando no oceano.`);
    }

    private buscarRecurso(): void {
        console.log(`${this.getNome()} (${this.especie}) está filtrando água para comer .`);
    }

    private emitirSom(): void {
        console.log(`${this.getNome()} (${this.especie}) está cantando!`);
    }

    private mover(): void {
        console.log(`${this.getNome()} (${this.especie}) está nadando lentamente.`);
    }

    verificarFome(): void {
        console.log(`${this.getNome()} (${this.especie}) está com fome nível ${this.getFome()}.`);
    }

    acaoAleatoria():void{
        let opcean=Math.floor(Math.random()*6+1)

        if(opcean===3){this.emitirSom()}
        
        if(opcean===1){this.mover()}
        
        if(opcean===4){this.buscarRecurso()}
        
        if(opcean===2){this.come()}
        
        if(opcean===5){this.nada()}

        if(opcean===6){this.verificarFome()}
    }

    interagir(sla:Animal):void{
        console.log(`${this.getNome()}(${this.especie}) molhou  ${sla.getNome()} (${sla.getSpecie()})`)
    }
    
}

//let baleialeia=new Baleia('Leia')


