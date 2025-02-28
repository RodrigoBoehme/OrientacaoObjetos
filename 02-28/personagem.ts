import { Bloco } from "./bloco";
import { Espada } from "./espada";

export class Personagem{
    private name:string;
    private vida:number=20;
    private inventario:Array<any>;
    private atack:number=5;
    private weapon:Espada;

    constructor(nome:string){
        this.name=nome
    }

    getName():string{return this.name}
    getLife():number{return this.vida}
    getInventory():Array<any>{return this.inventario}
    getSword():Espada{return this.weapon}


    setWeapon(a:Espada){this.weapon=a}


    heal():void{
        let heaal=Math.floor(Math.random()*4+1)

        if(this.vida==20){console.log('Vida cheia, nao e preciso curar')}
        else {
            this.vida+heaal
            if(this.vida>20){this.vida=20}
            console.log(`voce curou ${heaal} e ficou com ${this.vida} de vida`)
        }
    }
    sendoAtacado(a:any):void{
        let dammaage=Math.floor(Math.random()*5+1)

        if(typeof(a)=='number'){
            this.vida-=a

            if(dammaage==5)
                {console.log('Critical')
                this.vida-=2
            }

            if(this.vida<=0){
                console.log(`${this.name} recebeu ${a} de dano e morreu`);
                this.vida=20;
                console.log(`${this.name} Respawnou e esta com a vida cheia`)
            }
            else{console.log(`${this.name} recebeu ${a} de dano e ficou com ${this.vida} de vida`)}
        }
        if(typeof(a)=='string'){console.log('Conversa no jutsu nao funciona aki, ataque ineficaz')}
        
        if(typeof(a)!=='string'||'number'){'bro, what you doing here, this is a mistake'}

        //this.vida-=dammaage
        
        
    }
    attack():number{
        if (this.weapon===undefined){return this.atack}
        else{return this.atack+this.getSword().getDamage()}
    }
    attaack(a:Personagem):void{
        
        a.sendoAtacado(this.attack())
    }
    
}

const player=new Personagem('Itz A meh, Mario')

player.setWeapon(new Espada(15,1))

player.getSword().setName('Brocklin 99')

const player2=new Personagem('Sla')

player2.sendoAtacado(player.attack())
player.sendoAtacado(player2.attack())

player.attaack(player2)
player.attaack(player2)
player.attaack(player2)