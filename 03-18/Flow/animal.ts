
export class Animal {
    private nome: string;
    protected especie: string;
    private fome: number;



    constructor(nome: string, especie: string) {
        this.nome = nome;
        this.especie = especie;
        this.fome = Math.floor(Math.random() * 100);

    }
    getNome(): string {

        return this.nome
    }
    getFome(): number {
        return this.fome;
    }
    atualizaFome():void{
        if (this.fome == 1) {
            console.log("A fome chegou a 1")
            this.fome--;
        }
        else if(this.fome <= 0){
            console.log("O Animal morreu de fome ")
        }
         else {
            this.fome--;
        }
    }
        


    }