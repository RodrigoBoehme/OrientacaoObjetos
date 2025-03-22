import { SaborPizza } from "./sabores";
import { Tamanho } from "./tamanho";

export class Pizza{
    private tamanho:Tamanho
    private sabores:Array<SaborPizza>
    private preco:number

    constructor(sabores:Array<SaborPizza>=[SaborPizza.Mussarela],tamanho:Tamanho=Tamanho.Media){
        this.sabores=sabores
        this.calcPreco(sabores,tamanho)
        this.tamanho=tamanho
    }

    private calcPreco(SaboresEscolhidos:Array<SaborPizza>,tamanhoDaPizza:Tamanho):void{
        let variavelQueVaria:number=tamanhoDaPizza;
            
                variavelQueVaria+=(Math.sqrt(SaboresEscolhidos.length^3))*2.5
            
        this.preco=variavelQueVaria
    }

    Description():string{
        let algumaVariavel="O(s) Sabor(es) escolhido(s) foi(foram) "
        for(let saborr of this.sabores){
            algumaVariavel+=saborr+', '
        }
        algumaVariavel+=`Tamanho ${this.tamanho} dando um preco total de R$${this.preco.toFixed(2)}`;
        return algumaVariavel
    }
    getSabores():Array<SaborPizza>{return this.sabores}
}

let pizza1=new Pizza
let pizza2=new Pizza([SaborPizza.Americana,SaborPizza.BananaNevada,SaborPizza.Lombo],Tamanho.Grande)
let pizza3=new Pizza([SaborPizza.Metropolitana],Tamanho.Pequena)
let pizza4=new Pizza([SaborPizza.Americana,SaborPizza.BananaNevada,SaborPizza.Lombo,SaborPizza.Chocolate,SaborPizza.MMs,SaborPizza.Metropolitana,SaborPizza.Mussarela,SaborPizza.Queijos4],Tamanho.Grande)

console.log(pizza1.Description())
console.log(pizza2.Description())
console.log(pizza3.Description())

console.log(pizza4.Description())