import { Aluno } from "./Alunos"
import { Instrutor } from "./Intrutor"
import { TreinoPersonalizado } from "./Treinos"


export class Treino{
    Aluno:Aluno
    Instrutor:Instrutor
    Treino:TreinoPersonalizado

    constructor(Aluno:Aluno,Istrutor:Instrutor,Treino:TreinoPersonalizado){
        this.Aluno=Aluno
        this.Instrutor=Istrutor
        this.Treino=Treino

    }

}