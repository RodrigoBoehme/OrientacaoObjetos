interface Relacionavel{
    descreverRelacao():string
}

class Pessoa implements Relacionavel{
    nome:string;
    sobrenome:string;
    dataNacimento:Date
    genero:string
    outrasRelacoes:Array<Pessoa>=[]
    constructor(nome:string,sobrenome:string,BDay:Date,genero:string){
        this.nome=nome
        this.sobrenome=sobrenome
        this.dataNacimento=BDay
        this.genero=genero
    }

    adicionarRelacao(Relacao:Pessoa){
        this.outrasRelacoes.push(Relacao)
    }

    descreverRelacao(): string {
    return 
}
}
class conjuge extends Pessoa{


}


class PessoaAdotada {

}


class ArvoreGenealogica{
    pessoaRaiz:Pessoa
    pessoas:Array<Pessoa>=[]
    constructor(pessoaRaiz:Pessoa){
        this.pessoaRaiz=pessoaRaiz;
        
    }
    
    
    buscarPessonha(Nome:String):Pessoa|undefined{
        return 
    }
    adicionarFilhos(pai:Pessoa,filho:Pessoa):void{
        pai.adicionarRelacao(filho)
    }
}

let eu=new Pessoa("Rodrigo","Boehme",new Date("2002/09/27"),"M")
let familiaB=new ArvoreGenealogica(eu)
let meuPai=new Pessoa("Ricardo","Boehme",new Date("1988/07/17"),"M")
let meuAvo=new Pessoa("Heinz","Boehme",new Date("unknow"),"M")
console.log(eu.dataNacimento)
familiaB.adicionarFilhos(meuPai,eu)
familiaB

