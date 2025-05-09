export class Carta{
    private nome:string
    private tipo:string

    constructor(Nome:string,Tipo:string){
        this.nome=Nome
        this.tipo=Tipo
    }

    exibirCarta():void{
        console.log(this)
    }

}