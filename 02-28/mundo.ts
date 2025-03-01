import { Bloco } from "./bloco";


export class Mundo {
    private name: string;
    private blocos: Array<any>;
    private entidade:Array<any>;
    private tipo:string='World'

    constructor(nomeDoMundo: string, blocks: Array<Bloco>) {
        this.blocos = blocks;
        this.name = nomeDoMundo;
    }
    setWorldName(nome: string): void { this.name = nome }

    getWorldName(): string { return this.name }
    getName():string{return this.name}
    getWorldBlocks(): Array<any> { return this.blocos }
    getType():string{return this.tipo}

    addBlock(newBlock:Bloco): void { this.blocos.push(newBlock) }
    removeLastBlock(): void { this.blocos.pop() }
    copyLastBlock(): void {
        let randomAssNumberProvisoryName = this.blocos.length - 1;
        this.blocos.push(this.blocos[randomAssNumberProvisoryName])
    }
    addEntity(entity:any):void{this.entidade.push(entity)}

}


const Zawarudo=new Mundo('The World',[])

Zawarudo.addBlock(new Bloco('Terra',2))
console.log(Zawarudo.getWorldBlocks())
Zawarudo.copyLastBlock()
console.log(Zawarudo.getWorldBlocks())