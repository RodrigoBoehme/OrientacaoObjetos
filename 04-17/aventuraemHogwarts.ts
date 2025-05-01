import { Diretor } from "./Diretor"
import { wizard } from "./bruxo"
import { Casa } from "./casa"
import { Dragon } from "./dragons"
import { Grimorio } from "./grimorio"
import { Phoenix } from "./phoenix"
import { Sereia } from "./sereia"
import { epicBattleOgLetsGoBrrrrrrrrr } from "./simulacao"
import { evento } from "./tribruxo"


const readline=require('readline-sync')

let personagens=[]


function createPersonagem(){
    console.log('que tipo de personagem voce quer criar\n Bruxo\n Dragao\n Sereia\n Fenix\n Unicornio')
}
function adventura(){
    while(true){
        let opcao=readline.questionInt('Oque quer fazer hoje\n 1:\n 2: \n3: Pergunte ao diretor \n 4: Evento Tribruxo \n 5: Sair\n Insira um numero ')
        switch(opcao){
            case 1:

            break;

            case 2:

            break;

            case 3:
                console.log('que magia voce gostaria de saber')
                for(let livros in livroDeFeiticos){
                    console.log(livros)
                }

            break;

            case 4:
                console.clear()
                if(personagens.length>1){
                    evento(personagens)
                }
                else{console.log('voce precisa de mais pessoas para este evento\n')}
                readline.question('Continuar')
            break;

            case 5:
                console.clear()
            return;

            default:
                console.log('Opcao Errada')
            break;

            case 927:
                console.log('easter egg')
                personagens.push(new Dragon('Veldora',999))
            break
        }


    }
}

let casa1= new Casa('Griforia',[])
let Harry=new wizard('Harry pote',20,casa1)
let guria=new wizard('Guria',29,casa1)
let ruivo=new wizard('Ruivo',32,casa1)

let inimigo=new Dragon('Jefferson',31)
let inimigo2=new Phoenix('Jeffrey',23)
let iminiho=new wizard('ValDaMorte',35,casa1)
let inumigo=new Sereia('A pequena sereia',26)

let livroDeFeiticos:object={
    'avarakadavra':'ele cadravra akabra',
    'magia2':'descricao magia 2',
    'magia3':'descricao magia 3'
}
let Gandalf=new Diretor('Gandalff',livroDeFeiticos)

console.log(casa1)