import { Ingrediente} from "./ingredientes";

export class Potion{
    private nome:string;
    private descricao:string;
    private recita:Array<any>=[]

    setReceita(a):void{this.recita.push(a.getName())}
    setDescricao(description:string):void{this.descricao=description}

    getRecipe():Array<any>{return this.recita}


}
const cenouraDourada=new Ingrediente
const netherWart=new Ingrediente
netherWart.setName('Fungo Do Nether')
cenouraDourada.setName('Cenoura dourada')
const redStone=new Ingrediente
const sugar=new Ingrediente
sugar.setName('Acucar')
const potionSpeedI=new Potion

potionSpeedI.setReceita(sugar)
potionSpeedI.setReceita(cenouraDourada)
console.log(potionSpeedI.getRecipe())
