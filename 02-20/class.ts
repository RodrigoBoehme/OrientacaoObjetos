export class Cat{
    name:string;
    weight:number;

//constructor
    constructor(nameCat:string,weightCat:number){
        this.name=nameCat;
        this.weight=weightCat;
    }

    meow():void{
        console.log('Meow Meow')
    }

    eat(quantity:number):void{
        console.log('Dah has eaten '+quantity+'g')
    }
}

const meuGato1= new Cat('Pipoca',5)
const meuGato2= new Cat('Pantera',2.5)
meuGato1.meow()
meuGato1.eat(257)
meuGato2.eat(122)