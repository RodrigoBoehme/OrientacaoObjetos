export class Animal{
    name:string
    weight:number

    constructor(nameConst:string,weightConst:number){
        this.name=nameConst;
        this.weight=weightConst;
    }
    eat(quantity:number):void{
      //  console.log(this.name+" has eaten: "+quantity)//concatenação
        console.log(`${this.name} has eaten: ${quantity}`)//template
    }
    getNome():string{return this.name}

    
}
