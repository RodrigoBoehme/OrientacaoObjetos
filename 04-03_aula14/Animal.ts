
export abstract class Animal{
    nome:string
    constructor(Nome:string){
        this.nome=Nome
    }
    abstract fazerBarulho():void
}

