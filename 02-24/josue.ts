export class Feiticio{
    private nome:string;
    private tipo:string;
    private poder:number;

    getName():string{return this.nome}
    getType():string{return this.tipo}
    getPower():number{return this.poder}

    setName(name:string):void{this.nome=name}
    setPower(power:number):void{this.poder=power}
    setType(type:string):void{this.tipo=type}

    lancarFeitico():void{
        console.log(`${this.nome} , ${this.poder} ${this.tipo}`)
    }
}

const a=new Feiticio

a.setName('huehuebr')
a.setPower(2)
a.setType('Chaos')


const b=new Feiticio

b.setName('Auimaue')
b.setType('Calma')
b.setPower(99999)

export var c=new Feiticio
c.setName('josue')