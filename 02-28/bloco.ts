export class Bloco{
    private tipo:string;
    private durabilidade:number;
    private dano:number=1;
    private type:string='bloco'

    constructor(nome:string,durabilidade:number){
        this.tipo=nome;
        this.durabilidade=durabilidade;
    }
    getType():string{return this.type}
    getName():string{return this.tipo}
    getDurability():number{return this.durabilidade}
    getDamage():number{return this.dano}
} 