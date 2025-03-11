export class Habilidade{
    private nome:string
    private descricao:string;
    private type:string;

    constructor(nome:string,descricao:string,tipo:string){
        this.nome=nome
        this.descricao=descricao
        this.type=tipo;
    }

    getName():string{return this.nome}
    getDescription():string{return this.descricao}
    getType():string{return this.type}
}