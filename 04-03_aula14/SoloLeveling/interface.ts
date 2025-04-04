export interface Habilidade{
usarHabilidade():number;
calcularDano():number;
exibirDescricao():string;
}

export class MgAtk implements Habilidade{

    usarHabilidade(): number {
        return 5
    }
    exibirDescricao(): string {
        return 'sjfkjbd'
    }
    calcularDano(): number {
        return 35
    }
}



export class Hunter{
    Habilidades:Array<Habilidade>=[new MgAtk]
}
