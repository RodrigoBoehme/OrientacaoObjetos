import { BaralhoUno } from "./BaralhoUno";
import { CartaUno } from "./Carta";
import { Jogador } from "./Player";

export class MesaUno {
    baralho: BaralhoUno
    cartasMesa: Array<CartaUno|undefined> = []
    arrayPlayers: Array<Jogador>
    jogando:boolean=true
    sentidoDoJogo:boolean=false

    constructor(Jogadores: Array<Jogador>, Baralho: BaralhoUno) {
        this.baralho = Baralho;
        this.arrayPlayers = Jogadores;
        for (let i = 0; i < Jogadores.length; i++) {
            Jogadores[i].setMesa(this)
        }

    }

    Jogo():void{
        while(this.jogando){
            this.arrayPlayers[0].turno()

            if(this.cartaTopoDaMesa()===undefined){
                this.cartasMesa.pop()
            }else if(this.cartaTopoDaMesa().getRotacao()){
                this.sentidoDoJogo=!this.sentidoDoJogo;
            }
            if(this.sentidoDoJogo){
                this.arrayPlayers.push(this.arrayPlayers.shift())
            }
            else{
                this.arrayPlayers.unshift(this.arrayPlayers.pop())
            }
            for(let i=0;i<this.arrayPlayers.length;i++){
                this.jogando=!this.arrayPlayers[i].isEmpty()
            }
        }
    }


    cartaTopoDaMesa(): CartaUno | undefined {
        if (this.cartasMesa.length > 0) {
            return this.cartasMesa[this.cartasMesa.length - 1]
        }
    }

}