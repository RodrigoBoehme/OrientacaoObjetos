import { Distrito } from "./distrito"
import { Habilidade } from "./habilidades";

export class Tributo{
    private Nome:string
    private distrito:Distrito
    private saude:number=100;
    private habilidades:Array<Habilidade>;
    private recursosRecebidos:Array<string>=[]
    private envenenado:boolean=false
    private defense:number
    private armadura:number

    constructor(nomeDoTributo:string,distrito:Distrito,Habilidade:Array<Habilidade>){
        this.Nome=nomeDoTributo
        this.distrito=distrito
        this.habilidades=Habilidade    
    }
    private mathRandom(max:number,min:number):number{
        let muahahaMats:number
        muahahaMats=Math.floor((Math.random()*max)+min)

    return muahahaMats
    }

    private dmgTaken(damage:number){
        this.veneosla()
        this.saude-=damage
        if(this.saude<=0){
            console.log(`Tributo de nome:${this.Nome} do distrito ${this.distrito.getDistritoNome}`)
        }
    }

    calcularDano(damage:number):void{
        let danoRestante=damage-(this.defense+this.armadura)
        if(danoRestante<=0){console.log('Dano resistido')}
        else{this.dmgTaken(danoRestante)}
    }

    getAbilities():string{
        let a:string=''
        for (let abilitys of this.habilidades)
        {a+=abilitys.getName();
        a+=' '}
        return a
    }



    private getResources(b):void{
        this.recursosRecebidos.push(b)
    }
    getResourcs():void{
        let tempA=this.distrito.sendResources()
        this.getResources(tempA)


    }

    private veneosla(){
        if(this.envenenado===true){
           // let random=Math.floor(Math.random()*5+1)
        if (/*random==5*/this.mathRandom(5,1)==5){ this.envenenado=false;console.log(`o veneno em ${this.Nome} foi curado`)}
        else{this.saude-=5}
        }
    }
}

let b=new Distrito('3',['fogo'],5)
let a=new Tributo('Atributado',b,[new Habilidade('Gun','I cast gun, prepare to me God','Pew Pew')])
b.acquireResources()
console.log(b.getResourcesAvailhables())
a.getResourcs()
a.getResourcs()
console.log(b.getResourcesAvailhables())

console.log(a.getAbilities())

/*
lista=['a','b','c']
for objeto of lista{
    console.log(objeto)
}
output:
'a'
'b'
'c'
esse for lista todos objetos de um array um por vez, usado principalmente em arrays
*/