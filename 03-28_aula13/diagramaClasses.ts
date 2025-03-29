/*export class Aluno {

    private Nome: string
    private Idade: number
    private Peso: number
    private Altura: number
    Treino: TreinoPersonalizado
    private IMC:string

    constructor(Nome: string, Idade: number, Altura: number, Peso: number) {
        this.Altura = Altura
        this.Idade = Idade
        this.Nome = Nome
        this.Peso = Peso
        this.IMC=this.calcularIMC()
    }

    private calcularIMC(): string {

        let H:number=this.getAltura()
        let W:number=this.getPeso()

        let imc= W/H^2

        if(imc>=25 && imc <30){return 'SobrePeso'}
        if(imc>=40){return 'Obesidade Grau III'}
        if(imc>=35 && imc <40){return 'Obesidade Grau II'}
        if(imc>=30 && imc <35){return 'Obesidade Grau I'}
        if(imc<18.5){return 'Abaixo Do Peso'}
        if(imc>=18.5 && imc <25){return 'Normal'}
    }
    setTreinoPersonalizado(OTreino:TreinoPersonalizado): void {
        this.Treino = OTreino
    }

    getIdade(): number { return this.Idade }
    getPeso(): number { return this.Peso }
    getAltura(): number { return this.Altura }
    getNome(): string { return this.Nome }
    getIMC():string{return this.IMC}
}

export class Instrutor {

    private Nome: string
    private Especialidade: string
    private CREF: number
    private Alunos:Array<Aluno>

    constructor(Nome:string,Especialidade:string,CREF:number,Alunos:Array<Aluno>){
        this.Nome=Nome
        this.Especialidade=Especialidade
        this.CREF=CREF
        this.Alunos=Alunos
    }
    getAlunos():Array<Aluno>{return this.Alunos}
    getCREF(): number { return this.CREF }
    getEspecialidade(): string { return this.Especialidade }
    getName(): string { return this.Nome }

}
export class TreinoPersonalizado {
    private Exercicios:Array<string>
    private series:Array<string>
    private repeticoes:Array<number>

    constructor(Exercicios:Array<string>,Series:Array<string>,repeticoes:Array<number>){
        this.Exercicios=Exercicios
        this.series=Series
        this.repeticoes=repeticoes
    }
    getSeries():Array<string>{return this.series}
    getExercicios():Array<string>{return this.Exercicios}
    getRepeticoes():Array<number>{return this.repeticoes}
}
*/