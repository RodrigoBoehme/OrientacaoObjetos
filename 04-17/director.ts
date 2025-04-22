import { Grimorio } from "./grimorio";


export class Diretor implements Grimorio{

    nome:string

    grimorio:object={
        'talles':'petterson',
        'dos':'anjos'
    }

    consultarFeitico(input:string): string {
        return this.grimorio[input]
    }
}

let a = new Diretor

console.log(a.consultarFeitico('talles'))