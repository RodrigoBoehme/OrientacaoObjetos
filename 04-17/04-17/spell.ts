export class Spell{
    private nome:string
    private poder:number

    lancar():void{
        console.log('Mensgem Magica')
    }
    getName():string{return this.nome}
    getPower():number{return this.poder}
}