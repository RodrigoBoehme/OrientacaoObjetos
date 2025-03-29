import { Usuario } from "./Usuario"
import { Aluno } from "./Alunos"



export class Instrutor extends Usuario {

    private Nome: string
    private Especialidade: string
    private CREF: number
    private Alunos:Array<Aluno>
    private frequenciaAlunos:Array<any>=[]

    constructor(Nome:string,email:string,Especialidade:string,CREF:number,Alunos:Array<Aluno>){
        super(Nome,email)
        this.Especialidade=Especialidade
        this.CREF=CREF
        this.Alunos=Alunos
        for(let i=0;i<Alunos.length;i++){
            this.frequenciaAlunos.push(0)
        }
    }
    getAlunos():Array<Aluno>{return this.Alunos}
    getCREF(): number { return this.CREF }
    getEspecialidade(): string { return this.Especialidade }
    getName(): string { return this.Nome }


    atualizarFrequencia():void{
        for(let i=0;i<this.Alunos.length;i++){
            //aluno presente?
            
            if((Math.floor(Math.random()*5+1)<5)){this.frequenciaAlunos[i]=this.frequenciaAlunos[i]+1}
        }
    }
    getFrequenciaAlunos():void{
        for(let i=0;i<this.Alunos.length;i++){
            console.log(`Aluno${this.Alunos[i]} Freq: ${this.frequenciaAlunos[i]}`)
        }
    }



}
