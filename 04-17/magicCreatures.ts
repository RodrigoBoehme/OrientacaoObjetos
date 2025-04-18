export abstract class magicCreatures{
    protected name:string
    protected type:string
    protected power:number

    constructor(name:string,type:string,power:number){
        this.name=name;this.type=type;this.power=power
    }
    abstract castSpell():number

    getName():string{return this.name}
    getPower():number{return this.power}
    getType():string{return this.type}
}