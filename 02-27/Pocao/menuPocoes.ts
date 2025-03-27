import { Ingrediente } from "./ingredientes";
import { Potion } from "./pocoes";

const readline = require('readline-sync')

const goldenCarrot = new Ingrediente;
const netherWart = new Ingrediente;
const redStone = new Ingrediente;
const sugar = new Ingrediente;
const blazePowder = new Ingrediente;
const glistenningMelon = new Ingrediente;
const spiderEye = new Ingrediente;
const ghastTear = new Ingrediente;
const magmaCream = new Ingrediente;
const pufferfish = new Ingrediente;
const turtleShell = new Ingrediente;
const phantomMembrane = new Ingrediente;
const fermentedSpiderEye = new Ingrediente;
const glowstone = new Ingrediente
const bunnyFeet=new Ingrediente

ghastTear.setName('Lagrima de Ghast')
pufferfish.setName('Baiacu')
magmaCream.setName('Creme de magma')
spiderEye.setName('Olho de aranha')
fermentedSpiderEye.setName('Olho de aranha fermentado')
phantomMembrane.setName('Membrana de phantom')
turtleShell.setName('Casco de Tartaruga')
glistenningMelon.setName('Melancia Cintilante')
blazePowder.setName('Po de blaze')
netherWart.setName('Fungo Do Nether')
goldenCarrot.setName('Cenoura dourada')
sugar.setName('Acucar')
redStone.setName('Redstone')
glowstone.setName('GlowStone')
bunnyFeet.setName('Pe de coelho')

const ingredientesDisponiveis = [ghastTear, pufferfish, magmaCream, spiderEye, fermentedSpiderEye, phantomMembrane, turtleShell, glistenningMelon, blazePowder, netherWart, goldenCarrot, sugar, redStone,bunnyFeet]
const potionSpeedI = new Potion
const potionSpeedII = new Potion
const potionSlownessI=new Potion
const potionSlownessV2= new Potion
const potionSlownessIV=new Potion
const potionSlownessIV2=new Potion
const potionHealingI= new Potion


potionSpeedI.setName('Pocao de velocidade 1')
potionSpeedI.setDescricao('Pocao de velocidade')
let arrayIngredientes = []//sugar.getName(), goldenCarrot.getName()]

potionSpeedI.setReceita(netherWart)
potionSpeedI.setReceita(sugar)
//velocidade 2
potionSpeedII.setReceita(netherWart)
potionSpeedII.setReceita(sugar)
potionSpeedII.setReceita(glowstone)

potionSlownessI.setName('Pocao de lerdeza')
potionSlownessI.setReceita(netherWart)
potionSlownessI.setReceita(sugar)
potionSlownessI.setReceita(fermentedSpiderEye)

potionSlownessIV.setName('Pocao de lerdeza IV')
potionSlownessIV.setReceita(netherWart)
potionSlownessIV.setReceita(sugar)
potionSlownessIV.setReceita(fermentedSpiderEye)
potionSlownessIV.setReceita(glowstone)

potionSlownessV2.setName('Pocao de lerdeza')
potionSlownessV2.setReceita(netherWart)
potionSlownessV2.setReceita(bunnyFeet)
potionSlownessV2.setReceita(fermentedSpiderEye)

potionSlownessIV2.setName('Pocao de lerdeza')
potionSlownessIV2.setReceita(netherWart)
potionSlownessIV2.setReceita(bunnyFeet)
potionSlownessIV2.setReceita(fermentedSpiderEye)
potionSlownessIV2.setReceita(glowstone)

potionHealingI.setName('Pocao de cura')
potionHealingI.setReceita(netherWart)
potionHealingI.setReceita(glistenningMelon)



const arrayReceitas = [potionSpeedI, potionSpeedII]


function verificaReceita() {

    while (true) {
        for (let i = 0; i < arrayReceitas.length; i++) {
            if (arrayIngredientes.length === arrayReceitas[i].getRecipe().length) {
                for (let c = 0; c < arrayIngredientes.length; c++) {
                    if (arrayIngredientes.toString() === (arrayReceitas[i].getRecipe()).toString()) {
                        console.log(`${arrayReceitas[i].getName()} feita com sucesso`)
                        return
                    }
                }
            }
        }
        return

    }
}

function menuPocoes() {
    let opcao: number
    while (true) {
        opcao = readline.questionInt(' 1. Fazer pocao\n 2. Ver Ingredientes.\n 3. Ver receitas\n 4. Sair\n Opcao Selecionada: ');
        switch (opcao) {
            case 1:
                potionMaker3k()
                arrayIngredientes=[]
            break;

            case 2:
                mostrarIngredientes()
                readline.question('Continuar')
            break;

            case 3:
                mostraReceita()
                readline.question('continuar')
            break;

            case 4:

            return;


        }
    }

}
menuPocoes()
function mostrarIngredientes(){
    for(let i=0;i<ingredientesDisponiveis.length;i++){
        console.log('- '+ingredientesDisponiveis[i].getName())
    }
    return
}
function mostraReceita(){
    for(let i=0;i<arrayReceitas.length;i++){
        console.log(arrayReceitas[i].getRecipe())
    }
    return
}

function potionMaker3k(){
    let opcao:number;
    while (true) {
        opcao = readline.questionInt(' 1. Adicionar Ingrediente\n 2. Ver Ingredientes Ja colocados\n 3. Terminar Pocao \n 4. Sair\n Opcao Selecionada: ');
        switch (opcao) {
            case 1:
                mostraIngredientesV2()
                let sla=readline.questionInt('Qual Ingrediente adicionar: ')
                if(sla>ingredientesDisponiveis.length||sla<=0){
                    console.log('Numero invalido, nenhum ingrediente adicionado.')
                    readline.question('Continuar')
                }else{
                    arrayIngredientes.push(ingredientesDisponiveis[sla-1].getName())
                }
            break;

            case 2:
                console.log(arrayIngredientes)
                readline.question('Continuar')
            break;

            case 3:
                verificaReceita()
                readline.question('continuar')
                
            return

            case 4:

            return;


        }
    }
}

function mostraIngredientesV2(){
    for(let i=0;i<ingredientesDisponiveis.length;i++){
        console.log((i+1)+'- '+ingredientesDisponiveis[i].getName())
    }
}

//adicionar item, remover ultimo item, verificar poçao

