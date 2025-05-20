import { CartaUno, arrayCartas } from "./Carta";

export class BaralhoUno {
    private cartas: Array<CartaUno>
    


    constructor() {
        this.cartas = arrayCartas;
    }


    resetarBaralho(): void {
        this.cartas = arrayCartas;
    }

    public embaralharCartas(): void {
        this.embaralha(this.cartas);
    }


    isEmpty(): boolean { return this.cartas.length === 0 }

    public comprarCarta(): CartaUno | undefined {
        if (this.cartas.length > 0) {
            return this.cartas.pop();
        } else { console.log("Nao ha Cartas") }
    }


    private embaralha(lista: Array<CartaUno>) {

        for (let indice = lista.length; indice; indice--) {

            const indiceAleatorio = Math.floor(Math.random() * indice);

            // guarda de um índice aleatório da lista
            const elemento = lista[indice - 1];

            lista[indice - 1] = lista[indiceAleatorio];

            lista[indiceAleatorio] = elemento;
        }
    }
}


let baralho1 = new BaralhoUno()

while (!baralho1.isEmpty()) {
    console.log(baralho1.comprarCarta())
}

