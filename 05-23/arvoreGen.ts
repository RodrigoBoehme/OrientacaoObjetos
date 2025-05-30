import { node } from "./trees";

interface Relacionavel{
    descreverRelacao():string
}

class Pessoa implements Relacionavel{
    protected nome:string;
    protected sobrenome:string;
    protected dataNacimento:Date;
    protected genero:string;    
    outrasRelacoes:Array<Relacionavel>=[];

    profundidade:number=0
    
    constructor(nome:string,sobrenome:string,BDay:Date,genero:string){
        this.nome=nome
        this.sobrenome=sobrenome
        this.dataNacimento=BDay
        this.genero=genero
    }

    getNome():string{return this.nome}
    getSobrenome():string{return this.sobrenome}
    getGenero():string{return this.genero}
    getProdundidade():number{return this.profundidade}

    atualizarProfundidade(profundidadeNo:number){
        this.profundidade=1+profundidadeNo

    }

    descreverRelacao(): string {
        let relacao:string
        if(this.profundidade==1&& this.genero=="F"){relacao="Mae"}
        else if(this.profundidade==1&& this.genero=="M"){relacao="Pai"}
        else if(this.profundidade==2&& this.genero=="F"){relacao="Avo"}
        else if(this.profundidade==2&& this.genero=="M"){relacao="Avo"}
        else {relacao="Sem Relacao/Eu"}
    return relacao
}
}



class ArvoreGenealogica extends node<Pessoa>{
    pessoaRaiz:Pessoa
    pessoas:Array<Pessoa>=[]
    constructor(pessoaRaiz:Pessoa){
        super()
        this.pessoaRaiz=pessoaRaiz;
        this.pessoas.push(pessoaRaiz)
    }
    

    buscarPessonha(Nome:String):Pessoa|undefined{
      
        return 
    }
    adicionarFilhos(noPai:Pessoa,noFilho:Pessoa):void{
        noPai.outrasRelacoes.push(noFilho)
        if(!this.pessoas.includes(noFilho)){this.pessoas.push(noFilho)}
        noFilho.atualizarProfundidade(noPai.profundidade)
    }
}

let eu=new Pessoa("Rodrigo","Boehme",new Date("2002/09/27"),"M")
let familiaB=new ArvoreGenealogica(eu)
let meuPai=new Pessoa("Ricardo","Boehme",new Date("1974/07/17"),"M")
let minhaMae=new Pessoa("Rosane","Boehme",new Date("1975/01/30"),"F")
let meuAvoP=new Pessoa("Heinz","Boehme",new Date("1935/8/27"),"M")
let meuAvoM=new Pessoa("Walter","Duek",new Date("1955/01/01"),"M")
let minhaAvoP=new Pessoa("Tecla","Boehme",new Date("1935/01/04"),"F")
let minhaAvoM=new Pessoa("Ilsa","Duek",new Date(""),"F")

familiaB.adicionarFilhos(eu,meuPai)
familiaB.adicionarFilhos(eu,minhaMae)
familiaB.adicionarFilhos(meuPai,meuAvoP)
familiaB.adicionarFilhos(meuPai,minhaAvoP)
familiaB.adicionarFilhos(minhaMae,minhaAvoM)
familiaB.adicionarFilhos(minhaMae,meuAvoM)



console.log(eu.descreverRelacao())
console.log(meuPai.descreverRelacao())
console.log(meuAvoM.descreverRelacao())