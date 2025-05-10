// Salvando o Multiverso da Marvel

// Desenvolver um sistema que utilize Fila para gerenciar a ordem de entrada e saída
// dos personagens da Marvel. O primeiro personagem a chegar é o primeiro a ser
// enviado de volta para o seu tempo.
// Criar a Classe PersonagemTemporal com propriedades como nome (string),
// universo (string), assinaturaTemporal (number - representando a ordem de chegada)
// e método: exibirInfo().
// Criar a Classe FilaTemporal com propriedade de um array de personagens e
// métodos como enfileirar(personagem: PersonagemTemporal), desenfileirar(),
// primeiroDaFila(), estaVazia(), tamanho(), exibirFila().
let i=1
export class PersonagemTemporal {
    nome: string
    universo: string
    assinaturaTemporal: number

    constructor(Nome: string, Universo: string) {
        this.nome=Nome
        this.universo=Universo
        this.assinaturaTemporal=i
        i++
    }

    exibirInfo(): void {
        console.log(this)
    }
}


export class FilaTemporal {


    ArrayDePressaonagens: Array<PersonagemTemporal> = []

    enfileirar(item: PersonagemTemporal) {
        this.ArrayDePressaonagens.push(item)
    }
    desenfileirar(): PersonagemTemporal | undefined {
        if (this.estaVazia()) {
            console.log('A fila esta vazia')
            return undefined
        } return this.ArrayDePressaonagens.shift()
    }
    primeiroDaFila(): PersonagemTemporal | undefined {
        if (this.estaVazia()) {
            console.log("A fila esta vazia");
            return undefined;
        } return this.ArrayDePressaonagens[0]
    }
    estaVazia(): boolean {
        return this.ArrayDePressaonagens.length === 0
    }
    tamanho(): number {
        return this.ArrayDePressaonagens.length
    }
    exibirFila():void{
        for(let pers in this.ArrayDePressaonagens){
            console.log(this.ArrayDePressaonagens[pers].exibirInfo())
        }
    }
}

let fila=new FilaTemporal


fila.enfileirar(new PersonagemTemporal('Batma','DC'))
fila.enfileirar(new PersonagemTemporal('Indiana Jones',''))
fila.enfileirar(new PersonagemTemporal('Indiana Jones Lego','Lego'))
fila.enfileirar(new PersonagemTemporal('Batma Lego','Lego'))
fila.enfileirar(new PersonagemTemporal('Batman Zero','FortMemes'))

fila.exibirFila()
