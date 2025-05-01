import { Grimorio } from "./grimorio";


export class Diretor implements Grimorio{

    nome:string
    grimorio:object

    constructor(nome:string='Gandalf',grimorio:object={
        'avarakadavra':'ele cadravra akabra',
        'magia2':'descricao magia 2',
        'magia3':'descricao magia 3'
    }){
        this.nome=nome
        this.grimorio=grimorio
    }
    consultarFeitico(input:string): void {
        console.log(`${this.nome} lhes diz, este feitico: ${input} tem a seguninte descricao ${this.grimorio[input]}`)
    }
}

let a = new Diretor('Gandalf')

a.consultarFeitico('feitico1')