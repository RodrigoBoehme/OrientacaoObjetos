export class LugarMagico{
    private nome:string
    private andares:number
    private desafios:string

    setName(Name:string):void{this.nome=Name}
    getName():string{return this.nome}

    setFloors(Floors:number):void{this.andares=Floors}
    getFloors():number{return this.andares}

    setChalenges(Chalenge:string):void{this.desafios=Chalenge}
    getChalenge():string{return this.desafios}

}