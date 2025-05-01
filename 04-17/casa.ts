import { magicCreatures } from "./magicCreatures"
const readline=require('readline-sync')



export class Casa {

    nome: string

    integrantes: Array<magicCreatures>

    constructor(nomeDaCasa:string,integrantes:Array<magicCreatures>){
        this.nome=nomeDaCasa
        this.integrantes=integrantes

    }
    protected listarArray(): void {
        if (this.integrantes.length > 1) {
            for (let i = 0; i < this.integrantes.length; i++) {
                console.log(`${i + 1}- ${this.integrantes[i].getName()} `)
            }
        }
    }
    adicionarParticipantes(novoParicipante:magicCreatures){
        this.integrantes.push(novoParicipante)
        console.log(`${novoParicipante.getName()} se uniu a casa ${this.nome}`)
    }

    removerParicipante(): void {
        if (this.integrantes.length > 1) {
            console.log('Quem gostaria de Remover: \n')
            this.listarArray()
            let a:number=readline.questionInt('Digite o Numero: ')-1

            this.integrantes.splice(a,1)

        }
    }

}