export class Ingrediente{
    private name:string;
    private descprition:string;
    private idItem:number;

    getName():string{return this.name}
    getDescription():string{return this.descprition}
    getID():number{return this.idItem}

    setName(name:string):void{this.name=name}
    setDescription(descprition:string):void{this.descprition=descprition}
    setID(idItem:number):void{this.idItem=idItem}
}