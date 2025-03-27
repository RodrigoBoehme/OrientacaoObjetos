import { Animal } from "./Animal";

export class Baleia extends Animal{
    tipo:string='Baleia'
    constructor(name:string,weigh:number){super(name,weigh)}

    submergir():void{
        console.log(`${Animal.name} submergiu`)
    }
    buscarAlimento():void{
        console.log(`${this.name} nadou até o alimento`)
    }
}
function realizacao(qualquerAnimal:Animal){
    qualquerAnimal.eat(Math.floor(Math.random()*100+1))
}

let asdkjafndsjfhs=new Baleia('jlkjfljsdnf',50000)
let asdafad=new Animal('Dogo',4)
realizacao(asdkjafndsjfhs)
realizacao(asdafad)

console.log(typeof(asdafad))