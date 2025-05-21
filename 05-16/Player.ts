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
        return
    }
}

export class Humano extends Jogador{
jogarCarta(): CartaUno {
    if (this.mao.length > 0) {
        let cartasJogaveis:Array<string>;

        let cartaAnterior:CartaUno=this.mesa.cartaTopoDaMesa();

        for(let i=0;i<this.mao.length;i++){
            if(cartaAnterior.getCor()==this.mao[i].getCor()||cartaAnterior.getValor
            ()==this.mao[i].getValor()){
                let carta:string=i+" "+this.mao[i].getCor()+" "+this.mao[i].getValor();
                cartasJogaveis.push(carta)
            }
        }

        for(let i=0;i<cartasJogaveis.length;i++){
            console.log(i)
            console.log(cartasJogaveis[i])
        }
        // escolha aqui 

        
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
