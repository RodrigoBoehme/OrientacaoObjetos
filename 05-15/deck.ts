class Deck<T>{
    private elementos:T[]=[];
    adicionarNoInicio(item:T):void{
        this.elementos.unshift(item);
    }
    adicionarNoFinal(item:T):void{
        this.elementos.push(item);
    }
    removerDoInicio():T|undefined{
        return this.elementos.shift();
    }
    removerDoFinal():T|undefined{
        return this.elementos.pop();
    }
    primerio():T|undefined{
        return this.elementos[0];
    }
    ultimo():T|undefined{
        return this.elementos[this.elementos.length-1];
    }
    estaVazio():boolean{
        return this.elementos.length===0;
    }
    tamanho():number{
        return this.elementos.length;
    }
    limpar():void{
        this.elementos=[];
    }

}

const meuDeck=new Deck<number>();

meuDeck.adicionarNoInicio(1);
meuDeck.adicionarNoInicio(2);
meuDeck.adicionarNoFinal(3);
meuDeck.adicionarNoFinal(4);
console.log(`Primeiro elemento: ${meuDeck.primerio()}`)
console.log(`Ultimo elemento: ${meuDeck.ultimo()}`)
console.log(`Tamanho do Deck: ${meuDeck.tamanho()}`)
console.log(`Tira do Inicio: ${meuDeck.removerDoInicio()}`)
console.log(`Tira do Final: ${meuDeck.removerDoFinal()}`)
console.log(`Primeiro elemento: ${meuDeck.primerio()}`)
console.log(`Tamanho do deck: ${meuDeck.tamanho()}`)
meuDeck.limpar()
console.log(`Deck esta Vazio? ${meuDeck.estaVazio()}`)