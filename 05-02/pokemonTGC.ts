export class Carta{
    nome:string
    tipo:string


    exibirCarta():void{
        console.log(this)
    }
}

export class CartaPokemonio extends Carta{
    atk:number
    hp:number
}

export class CartaEnergia extends Carta{
    value:number
}

export class CartaItem extends Carta{
    efect:string
}

export class CartaTreinador extends Carta{
    descricao:string
}

export class Baralho{
    deck:Array<Carta>=[]

    embaralharDeck():void{
        this.embaralha(this.deck)
    }
    comprarCarta():Carta|undefined{return this.deck.pop()}

    visualizarTopo():Carta|undefined{return this.deck[this.deck.length-1]}
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


export class Tabuleiro{
    pilhaDescarte:Array<Carta>=[]
    
    adicionarCartaMao(){}

    descartarCarta(Descarte:Carta){this.pilhaDescarte.push(Descarte)}

    exibirMao(){}
    exibirDescarte(){}
}

