import { BaralhoUno } from "./BaralhoUno";
import { CartaUno } from "./Carta";
import { Jogador } from "./Player";

export class MesaUno {
    baralho: BaralhoUno
    cartasMesa: Array<CartaUno|undefined> = []
    arrayPlayers: Array<Jogador>
    jogando:boolean=true
    sentidoDoJogo:boolean=false
    comeco=true;
    bloqueio:boolean=false

    constructor(Jogadores: Array<Jogador>, Baralho: BaralhoUno) {
        this.baralho = Baralho;
        this.arrayPlayers = Jogadores;
        for (let i = 0; i < Jogadores.length; i++) {
            Jogadores[i].setMesa(this)
        }

    }

    Jogo():void{
        if(this.comeco){
            this.baralho.embaralharCartas();
            for(let i=0;i<7;i++){
                for(let a=0;a<this.arrayPlayers.length;a++){
                    this.arrayPlayers[a].comprarCarta()
                }


            }
            this.cartasMesa.push(this.baralho.comprarCarta())
            while(this.cartaTopoDaMesa().getValor()=="Inverter"||this.cartaTopoDaMesa().getValor()=="+4"||this.cartaTopoDaMesa().getValor()=="Bloquear"||this.cartaTopoDaMesa().getValor()=="+2"||this.cartaTopoDaMesa().getValor()=="MudarCor"){
                this.baralho.retornarCarta(this.cartasMesa.pop)
                this.cartasMesa.push(this.baralho.comprarCarta())

            }
            this.comeco=false;
        }


        while(this.jogando){
            if(!this.bloqueio){
            this.arrayPlayers[0].turno()
            if(this.cartaTopoDaMesa().getBlock()){
            this.bloqueio=this.cartaTopoDaMesa().getBlock();
            } else{this.bloqueio=!this.bloqueio}
        }
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