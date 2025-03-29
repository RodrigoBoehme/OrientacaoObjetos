
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