import { Carta } from "./carta";

export class CartaTreinador extends Carta{
    descricao:string
    constructor(Nome:string,Tipo:string){
        super(Nome,Tipo)
    }
}
