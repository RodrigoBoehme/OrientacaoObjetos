export class Cat{
    private name:string;
    private weight:number;

//constructor
    constructor(nameCat:string,weightCat:number){
        this.name=nameCat;
        this.weight=weightCat;
    }

    setName(nameCat:string):void{
        this.name=nameCat;
    }

    getName():string{return this.name}

    meow():void{
        console.log('Meow Meow')
    }

    eat(quantity:number):void{
        console.log('Dah cat has eaten '+quantity+'g')
    }
}



const meuGato1= new Cat('Pipoca',5)
const meuGato2= new Cat('Pantera',2.5)
meuGato1.meow()
meuGato1.eat(257)
meuGato2.eat(122)
const gato3= new Cat('pepoca',5823974192384)
gato3.nome