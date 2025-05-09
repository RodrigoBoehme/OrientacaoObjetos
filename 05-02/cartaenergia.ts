import { Carta } from "./carta";

export class CartaEnergia extends Carta{
    value:number
    constructor(Nome:string,Tipo:string,Valor:number){
        super(Nome,Tipo)
        this.value=Valor

    }
}