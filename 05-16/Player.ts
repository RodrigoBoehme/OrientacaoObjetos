import { BaralhoUno } from "./BaralhoUno";
import { CartaUno } from "./Carta";
import { MesaUno } from "./mesa";
const readline = require('readline-sync');

export abstract class Jogador {
    mao: Array<CartaUno>
    baralho:BaralhoUno
    mesa:MesaUno
    

    numeroDeCartas(): number { return this.mao.length }

    comprarCarta():void{
        this.mao.push(this.baralho.comprarCarta())
    }

        setMesa(Mesa:MesaUno):void{
        this.mesa=Mesa;
    }
    turno(){

    }

    isEmpty():boolean{return this.mao.length===0}

    jogarCarta(): CartaUno | undefined {
        if (this.mao.length > 0) {
            let cartasJogaveis:Array<CartaUno>;
            for (let i = 0; i < this.mao.length; i++) {
                console.log(i + 1 + " " + this.mao[i].getCor()+" "+this.mao[i].getValor())
            }
            let opcao: number = -1;
            while (opcao > this.mao.length || opcao < 1) {
                opcao = readline.questionInt('Qual carta voce gostaria de usar') - 1
            }
            return this.mao.splice(opcao, 1)[0]
        }
    }
}

export class Computador extends Jogador{


    jogarCarta(): CartaUno | undefined {
        return
    }

    jogarCartaCPU(cartaDoTopo:CartaUno): CartaUno {
        let opcao:number=-1;
        for(let i=0;i<this.mao.length;i++){
            if(cartaDoTopo.getCor()==this.mao[i].getCor()||cartaDoTopo.getValor()==this.mao[i].getValor()){
                opcao=i;
                i=999999999;
            }
        }
        
        if(opcao>this.mao.length||opcao<0){
            this.comprarCarta()
        }

        return this.mao.splice(opcao,1)[0]
    }
}