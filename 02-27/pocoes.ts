import { Ingrediente} from "./ingredientes";

export class Potion{
    private nome:string;
    private descricao:string;
    private recita:Array<any>=[]

    setReceita(a):void{this.recita.push(a.getName())}
    setDescricao(description:string):void{this.descricao=description}
    setName(name:string):void{this.nome=name}

    getRecipe():Array<any>{return this.recita}
    getName():String{return this.nome}
    getDescription():string{return this.descricao}


}
