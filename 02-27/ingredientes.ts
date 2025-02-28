export class Ingrediente{
    private name:string;
    private descprition:string;

    getName():string{return this.name}
    getDescription():string{return this.descprition}

    
    setName(name:string):void{this.name=name}
    setDescription(descprition:string):void{this.descprition=descprition}

    description():void{console.log(this.descprition)}
}