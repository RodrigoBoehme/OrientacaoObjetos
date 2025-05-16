export class Documento{
    private nome:string;
    private conteudo:string;


    
    constructor(Titulo: string, Descricao: string) {
        this.nome = Titulo
        this.conteudo = Descricao
    }

    getNome():string{return this.nome}
    getConteudo():string{return this.conteudo}
}