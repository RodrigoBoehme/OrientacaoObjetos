export class Usuario{

    nome:string
    email:string

    constructor(Nome:string,email:string){
        this.email=email.trim()
        this.nome=Nome
    }

    exibirInfo():void{
        console.log('Nome: '+this.nome+'\n'+'Email: '+this.email)
    }
    getEmail():string{return this.email}
    getName():string{return this.nome}
}