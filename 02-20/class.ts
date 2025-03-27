export class Cat{
    private name:string;
    private weight:number;
    protected 

//constructor
    constructor(nameCat:string,weightCat:number){
        this.name=nameCat;
        this.weight=weightCat;
    }

    public setName(nameCat:string):void{
        this.name=nameCat;
    }

    public getName():string{return this.name}

    public meow():void{
        console.log('Meow Meow')
    }

    public eat(quantity:number):void{
        console.log('Dah cat has eaten '+quantity+'g')
    }
}



const meuGato1= new Cat('Pipoca',5)
const meuGato2= new Cat('Pantera',2.5)
meuGato1.meow()
meuGato1.eat(257)
meuGato2.eat(122)
const gato3= new Cat('pepoca',5823974192384)
