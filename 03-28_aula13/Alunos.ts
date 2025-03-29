import { Usuario } from "./Usuario"
import { TreinoPersonalizado } from "./Treinos"


export class Aluno extends Usuario {

    private Nome: string
    private Idade: number
    private Peso: number
    private Altura: number
    Treino: TreinoPersonalizado
    private IMC: string


    constructor(Nome: string, Email: string, Idade: number, Altura: number, Peso: number) {
        super(Nome, Email)
        this.Altura = Altura
        this.Idade = Idade
        this.Nome = Nome
        this.Peso = Peso
        this.IMC = this.calcularIMC()
    }

    private calcularIMC(): string {

        let H: number = this.getAltura()
        let W: number = this.getPeso()

        let imc = W / H ^ 2

        if (imc >= 25 && imc < 30) { return 'SobrePeso' }
        if (imc >= 40) { return 'Obesidade Grau III' }
        if (imc >= 35 && imc < 40) { return 'Obesidade Grau II' }
        if (imc >= 30 && imc < 35) { return 'Obesidade Grau I' }
        if (imc < 18.5) { return 'Abaixo Do Peso' }
        if (imc >= 18.5 && imc < 25) { return 'Normal' }
    }
    setTreinoPersonalizado(OTreino: TreinoPersonalizado): void {
        this.Treino = OTreino
    }
    AtualizarDados(H:number,W:number,I:number){
        this.Altura=H
        this.Peso=W

        this.IMC=this.calcularIMC()

    }

    getIdade(): number { return this.Idade }
    getPeso(): number { return this.Peso }
    getAltura(): number { return this.Altura }
    getNome(): string { return this.Nome }
    getIMC(): string { return this.IMC }
}

