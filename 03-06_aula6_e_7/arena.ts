
//Rodrigo 
//Ryan
import { Organizador } from "./Organizador";
import { Distrito } from "./distrito";
import { Tributo } from "./tributo";

const diz1=new Distrito('Distrito primeiro q?',['Praga','Para'],Math.floor(Math.random()*8000+1))
const diz2=new Distrito('Destruto sla',['cringe','paia','tosco'],Math.floor(Math.random()*8000+1))
const concorrente1=new Tributo('Josue n sei quem é',diz2,['Fly']);
const concorrente2=new Tributo('Shirley terezinha, ninguem sabe nem a vizinha',diz1,[])

const org=new Organizador('cleiton',[diz1,diz2],[concorrente1,concorrente2])

org.getdistrito()
org.criarDesastre()