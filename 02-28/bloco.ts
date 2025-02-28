export class Bloco{
    private tipo:string;
    private durabilidade:number;
    private dano:number=1;

    constructor(nome:string,durabilidade:number){
        this.tipo=nome;
        this.durabilidade=durabilidade;
    }

    getName():string{return this.tipo}
    getDurability():number{return this.durabilidade}
    getDamage():number{return this.dano}
}