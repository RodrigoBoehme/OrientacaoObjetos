class pilhaDePratos{
    private arrayDePratos:Array<string>=[]

    adicionarPrato(prato:string):void{this.arrayDePratos.push(prato)}
    retirarPrato():string|undefined{return this.arrayDePratos.pop()}
    verPrato():string|undefined{return this.arrayDePratos[this.arrayDePratos.length-1]}
    quebrarTodosOsPratos():void{this.arrayDePratos=[]}
    estaVazio():boolean{return this.arrayDePratos.length===0}
    tamanho():number{return this.arrayDePratos.length}
}


const praticamentePratos=new pilhaDePratos
praticamentePratos.adicionarPrato('Prato de Vidro')
praticamentePratos.adicionarPrato('Prato de porcelada')

console.log(praticamentePratos.estaVazio())
console.log(praticamentePratos.verPrato())
console.log(praticamentePratos.retirarPrato())
console.log(praticamentePratos.verPrato())
praticamentePratos.quebrarTodosOsPratos()
console.log(praticamentePratos.estaVazio())
