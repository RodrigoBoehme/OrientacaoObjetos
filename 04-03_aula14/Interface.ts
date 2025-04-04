interface Animal{
    nome:string;
    emitirSom():void;
}

interface Voador{
    voar():void;
}

interface Aquatico{
    nadar():void;
}

class cachorro implements Animal{
    nome:string
    constructor(Nome:string){
        this.nome=Nome
    }
    emitirSom(): void {
        console.log(`${this.nome} late`)
    }
}
class Pato implements Animal,Voador,Aquatico{
    nome:string

    constructor(nome:string){this.nome=nome}

    emitirSom(): void {
        console.log(`${this.nome} says: quak`)
    }
    nadar(): void {
        console.log(`${this.nome} faz nada a nadar`)
    }
    voar(): void {
        console.log(`${this.nome} esta avoar`)
    }
}

interface Lista<T>{
    adicionar(item:T):void
    remover(item:T):void
    tamanho():number
}

class ListaNumerica implements Lista<number>{
    private items:number[]=[]

    adicionar(item: number): void {
        this.items.push(item)
    }

    remover(item: number): void {
        const index=this.items.indexOf(item);
        if(index!==-1){
            this.items.splice(index,1)
        }
    }
    tamanho(): number {
        return this.items.length
    }
}