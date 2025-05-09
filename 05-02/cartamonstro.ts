import { Carta } from "./carta"

export class CartaPokemonio extends Carta{
    private atk:number
    private hp:number
    private vidaAtual:number
    constructor(Nome:string,Tipo:string,Ataque:number,Vida:number){
        super(Nome,Tipo)
        this.atk=Ataque
        this.hp=Vida
        this.vidaAtual=Vida
    }
    atualizarVida(Dano){
        this.vidaAtual-=Dano
    }
    getHp():number{return this.vidaAtual}
    getAtk():number{return this.atk}
}


