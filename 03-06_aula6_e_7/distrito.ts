export class Distrito {
    private nome: string;
    private recursos: Array<string>;
    private populacao: number;
    private recursosRecolhidos: Array<string>=[];


    constructor(nomeDoDestruto: string, recursosColetaveis: Array<string>, populacao: number) {
        this.nome = nomeDoDestruto;
        this.recursos = recursosColetaveis
        this.populacao = populacao
    }

    acquireResources(): void {
        if (this.recursos.length > 0) {
            let a=Math.floor(Math.random()*this.recursos.length)
            this.recursosRecolhidos.push(this.recursos[a]+' x'+Math.floor(Math.random()*64+1))
        }else{console.log('Sem recursos para coletar')}
    }
    sendResources():string{
        if(this.recursosRecolhidos.length!==0){
        let b=Math.floor(Math.random()*this.recursosRecolhidos.length)
        let tempX=this.recursosRecolhidos[b]
        this.recursosRecolhidos.splice(b,1)
        return tempX
        }
        else{
            return 'Nada'
        }
    }
    getDistritoNome():string{
        return this.nome
    }
    getResourcesAvailhables():Array<string>{return this.recursosRecolhidos}

    desastresDesastrosos(a:number):void{
        this.populacao=Math.floor(this.populacao-this.populacao*Number('0.'+a))
    }
    monstrosMonsturosos(b:number):void{
        this.populacao=Math.floor(this.populacao-this.populacao*Number('0.'+b))
        
    }
}
/*
const distritreis=new Distrito('Dustrito 3',[],500)
distritreis.acquireResources()
console.log(distritreis.sendResources())
const doistrito=new Distrito('Distrito 2',['Ferro','Materia Organica'],200)
doistrito.acquireResources()
doistrito.acquireResources()
console.log(doistrito.sendResources())
console.log(doistrito.sendResources())

*/