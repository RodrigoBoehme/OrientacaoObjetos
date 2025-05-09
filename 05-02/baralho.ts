import { Carta } from "./carta"

export class Baralho{
     deck:Array<Carta>=[]

    constructor(Deck:Array<Carta>){
        this.deck=Deck
    }
    embaralharDeck():void{
        this.embaralha(this.deck)
    }
    comprarCarta():Carta|undefined{return this.deck.pop()}//pop

    visualizarTopo():Carta|undefined{return this.deck[this.deck.length-1]}//peek
    
    private embaralha(lista:Array<Carta>) {

        for (let indice = lista.length; indice; indice--) {
    
            const indiceAleatorio = Math.floor(Math.random() * indice);
            
            // guarda de um índice aleatório da lista
            const elemento = lista[indice - 1];
            
            lista[indice - 1] = lista[indiceAleatorio];
            
            lista[indiceAleatorio] = elemento;
        }
    }
    
}



