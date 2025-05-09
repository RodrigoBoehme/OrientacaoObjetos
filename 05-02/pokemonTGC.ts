import { Baralho } from "./baralho"
import { Carta } from "./carta"
import { CartaItem } from "./cartaitem"
import { CartaPokemonio } from "./cartamonstro"






export class Tabuleiro {
    private DeckP1: Baralho
    private DeckP2: Baralho
    private pilhaDescarte: Array<Carta> = []
    private mao: Array<Carta>
    private mao2: Array<Carta>
    private turno: number = 0

    constructor(Deck: Baralho, Deck2: Baralho) {
        this.DeckP1 = Deck
        this.DeckP2 = Deck2
        this.DeckP1.embaralharDeck()
        this.DeckP2.embaralharDeck()
    }
    protected adicionarCartaMao(): void {
        if(this.turno%2==1){
            this.mao.push(this.DeckP1.comprarCarta())
        }
        else{
            this.mao2.push(this.DeckP2.comprarCarta())
        }
    }

    descartarCarta(Descarte: Carta) { this.pilhaDescarte.push(Descarte) }

    exibirMao():void{
        if(this.turno%2==1){
            console.log(this.mao)
        }else{
            console.log(this.mao2)
        }
     }
    exibirDescarte():void{
        console.log(this.pilhaDescarte)
    }
    
}

