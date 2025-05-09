import { Carta } from "./carta";

export class CartaItem extends Carta{
    private effect:string
    constructor(Nome:string,Tipo:string,Efeito:string){
        super(Nome,Tipo)
        this.effect=Efeito
    }
    getEffect():string{return this.effect}
}
