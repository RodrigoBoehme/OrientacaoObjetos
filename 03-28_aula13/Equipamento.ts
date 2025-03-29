export class Equipamento{
    nome:string
    descricao:string
    disponibilidade:boolean

    constructor(Name:string,Descrition:string,available:boolean){
        this.nome=Name
        this.descricao=Descrition
        this.disponibilidade=available
    }

    getDisponibilidade():boolean{
        return this.disponibilidade
    }

}