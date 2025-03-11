export class Cat{
    private name:string;
    private weight:number;
    protected race:string;

//constructor
    constructor(nameCat:string,weightCat:number,raceCat:string){
        this.name=nameCat;
        this.weight=weightCat;
        this.race=raceCat;
    }

    public setName(nameCat:string):void{
        this.name=nameCat;
    }

    public getName():string{return this.name}

    public meow():void{
        console.log('Meow Meow')
    }

    protected getRace():string{
        return this.race
    }
    private returnWeight():number{
        return this.weight
    }

    public eat(quantity:number):void{
        console.log('Dah cat has eaten '+quantity+'g')
    }
}

class gatoSiames extends Cat{
    public showRaceSiakese():string{
        return this.getRace()
    }
}

const meuGato1= new Cat('Pipoca',5,'jjoooooooooooooooooooooooooooooooooooooooooooooooooooooo')
const meuGato2= new Cat('Pantera',2.5,'caos')
meuGato1.meow()
meuGato1.eat(257)
meuGato2.eat(122)
const gato3= new gatoSiames('jeezzz',50000,'senhames')
