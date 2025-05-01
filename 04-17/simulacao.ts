import { wizard } from "./bruxo";
import { Casa } from "./casa";
import { Dragon } from "./dragons";
import { magicCreatures } from "./magicCreatures";
import { Phoenix } from "./phoenix";
import { Sereia } from "./sereia";

export function RND_F(max:number,min:number=0){
    let a=Math.floor(Math.random()*(max-min)+min)
    return a
}

export function epicBattleOgLetsGoBrrrrrrrrr(casa:Casa,Iminigo:magicCreatures){
    console.log(`A casa ${casa.nome} entra em combate com ${Iminigo.getName()}`)

    let vidaCasa:number=50*casa.integrantes.length
    let vidaIginimo:number=50*casa.integrantes.length+1

    while(vidaCasa>0&&vidaIginimo>0){
        if(RND_F(100)<65){
            let p1=casa.integrantes[RND_F(casa.integrantes.length)]
            console.log(`${p1.getName()} ataca o inimigo com um poder de ${p1.castSpell()}`)
            vidaIginimo-=p1.castSpell()
        }
        else{
            console.log(`${Iminigo.getName()} ataca a casa com um poder de ${Iminigo.castSpell()}`)
            vidaCasa-=Iminigo.castSpell()

        }
    }

    if(vidaCasa>0){console.log(`A casa ${casa.nome} ganhou`)}
    else{console.log('O inimigo '+Iminigo.getName()+' era um(a) Poderoso(a) '+Iminigo.getType() +' e derrotou a casa '+casa.nome)}
}


let Harry=new wizard('Harry','mago',25)
let guria=new wizard('Guria','Maga',29)
let ruivo=new wizard('Ruivo','bruxo',32)

let inimigo=new Dragon('Jefferson',42)
let inimigo2=new Phoenix('Jeffrey',23)
let iminiho=new wizard('ValDaMorte','Bruxo',40)
let inumigo=new Sereia('A pequena sereia',26)
let inimigos=[inimigo,inimigo2,inumigo,iminiho]

let casa1=new Casa('Hogwarts',[Harry,guria,ruivo])

epicBattleOgLetsGoBrrrrrrrrr(casa1,inimigos[RND_F(inimigos.length)])