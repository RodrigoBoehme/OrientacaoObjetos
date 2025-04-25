import { Grimorio } from "./grimorio";


export class Diretor implements Grimorio{

    nome:string

    grimorio:object={
        'feitico1':'descricao feitico 1',
        'feitico2':'descricao feitico 2',
        'feitico3':'descricao feitico 3'
    }

    constructor(nome:string='Gandalf',grimorio:object){
        this.nome=nome
        this.grimorio=grimorio
    }
    consultarFeitico(input:string): void {
        console.log(`${this.nome} lhes diz, este feitico: ${input} tem a seguninte descricao ${this.grimorio[input]}`)
    }
}

let a = new Diretor('Gandalf',{
    'feitico1':'descricao feitico 1',
    'feitico2':'descricao feitico 2',
    'feitico3':'descricao feitico 3'})

a.consultarFeitico('feitico1')