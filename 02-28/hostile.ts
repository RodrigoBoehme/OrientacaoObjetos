export class Monster{
    private nome:string;
    private vida:number;
    private distanciaDeAtaque:number;
    private poderDeAtaque:number;
    private tipo:string='entity';


    constructor(name:string,vida:number,distAtck:number,atkPwr:number){
        this.nome=name;this.vida=vida;
        this.distanciaDeAtaque=distAtck;
        this.poderDeAtaque=atkPwr;
    }

    getName():string{return this.nome}
    getLife():number{return this.vida}
    getDistAtck():number{return this.distanciaDeAtaque}
    getAtkPwr():number{return this.poderDeAtaque}
    getType():string{return this.tipo}

    nameTag(nome:string):void{this.nome=nome}
}