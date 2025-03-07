import { Distrito } from "./distrito"

export class Tributo{
    private Nome:string
    private distrito:Distrito
    private saude:number=100;
    private habilidades:Array<string>;
    private recursosRecebidos:Array<string>=[]

    constructor(nomeDoTributo:string,distrito:Distrito,Habilidade:Array<string>){
        this.Nome=nomeDoTributo
        this.distrito=distrito
        this.habilidades=Habilidade    
    }

    dmgTaken(damage:number){
        this.saude-=damage
        if(this.saude<=0){
            console.log(`Tributo de nome:${} do distrito ${this.distrito.getDistritoNome}`)
        }
    }
    private getResources(b):void{
        this.recursosRecebidos.push(b)
    }
    getResourcs():void{
        let tempA=this.distrito.sendResources()
        this.getResources(tempA)


    }
}