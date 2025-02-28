export class Espada {
    private name: string = 'Espada de Diamante';
    private durabilidade: number;
    private dano: number;
    private broken: boolean = false;

    constructor(durability: number, damage: number) {
        this.dano = damage;
        this.durabilidade = durability;
    }

    setName(nome: string) { this.name = nome }

    getName(): string { return this.name }
    getDurability(): number { return this.durabilidade }
    getDamage(): number { return this.dano }
    isItBroken():boolean{return this.broken}

    attack() {
        if (this.durabilidade > 0) {
            console.log('Ataque, a durabilidade diminuiu em 1')
            this.durabilidade -= 1
        }if(this.durabilidade<=0){
            console.log(`${this.name} esta quebrado e não pode atacar`);
            this.broken=true;
        }
    }

    repair(){
        if(this.durabilidade>=1){
       let reapair:number=Math.floor(Math.random()*5+1)
       console.log(`${this.name} foi consertado e recuperou ${reapair} pontos de durabilidade`)
       this.durabilidade+=reapair
        }else{console.log('This item is broken, impossible to repair')}
    }

}