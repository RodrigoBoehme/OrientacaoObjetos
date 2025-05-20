// Criar a classe Carta com propriedades para cor (azul, amarelo, verde, vermelho) e valor
// (0-9, Comprar2, comprar4, Inverter, Bloquear).

export class CartaUno {
    private color: string;
    private value: string;
    private rotacao:boolean=false;
    private pontuacao:number;

    constructor(Cor: string, Tipo: string) {
        this.color = Cor;
        this.value=Tipo;
        if(this.value=="Inverter"){
            this.rotacao=true;
        }
        if(Cor=="Preta"){
            this.pontuacao=50
        }
        else if(Tipo=="Inverter"||Tipo=="Bloquear"||Tipo=="+2"){
            this.pontuacao=20
        }
        else{
            this.pontuacao=Number(Tipo)
        }
    }
    public getRotacao():boolean{return this.rotacao}
    public getCor(): string { return this.color }
    public getValor(): string { return this.value }

    

}


export let arrayCartas:Array<CartaUno>=[
    new CartaUno("Verde","0"),
    new CartaUno("Verde","1"),
    new CartaUno("Verde","2"),
    new CartaUno("Verde","3"),
    new CartaUno("Verde","4"),
    new CartaUno("Verde","5"),
    new CartaUno("Verde","6"),
    new CartaUno("Verde","7"),
    new CartaUno("Verde","8"),
    new CartaUno("Verde","9"),
    new CartaUno("Verde","Inverter"),
    new CartaUno("Verde","+2"),
    new CartaUno("Verde","Bloquear"),
    new CartaUno("Verde","1"),
    new CartaUno("Verde","2"),
    new CartaUno("Verde","3"),
    new CartaUno("Verde","4"),
    new CartaUno("Verde","5"),
    new CartaUno("Verde","6"),
    new CartaUno("Verde","7"),
    new CartaUno("Verde","8"),
    new CartaUno("Verde","9"),
    new CartaUno("Verde","Inverter"),
    new CartaUno("Verde","+2"),
    new CartaUno("Verde","Bloquear"),
    new CartaUno("Vermelho","0"),
    new CartaUno("Vermelho","1"),
    new CartaUno("Vermelho","2"),
    new CartaUno("Vermelho","3"),
    new CartaUno("Vermelho","4"),
    new CartaUno("Vermelho","5"),
    new CartaUno("Vermelho","6"),
    new CartaUno("Vermelho","7"),
    new CartaUno("Vermelho","8"),
    new CartaUno("Vermelho","9"),
    new CartaUno("Vermelho","Inverter"),
    new CartaUno("Vermelho","+2"),
    new CartaUno("Vermelho","Bloquear"),
    new CartaUno("Vermelho","1"),
    new CartaUno("Vermelho","2"),
    new CartaUno("Vermelho","3"),
    new CartaUno("Vermelho","4"),
    new CartaUno("Vermelho","5"),
    new CartaUno("Vermelho","6"),
    new CartaUno("Vermelho","7"),
    new CartaUno("Vermelho","8"),
    new CartaUno("Vermelho","9"),
    new CartaUno("Vermelho","Inverter"),
    new CartaUno("Vermelho","+2"),
    new CartaUno("Vermelho","Bloquear"),
    new CartaUno("Azul","0"),
    new CartaUno("Azul","1"),
    new CartaUno("Azul","2"),
    new CartaUno("Azul","3"),
    new CartaUno("Azul","4"),
    new CartaUno("Azul","5"),
    new CartaUno("Azul","6"),
    new CartaUno("Azul","7"),
    new CartaUno("Azul","8"),
    new CartaUno("Azul","9"),
    new CartaUno("Azul","Inverter"),
    new CartaUno("Azul","+2"),
    new CartaUno("Azul","Bloquear"),
    new CartaUno("Azul","1"),
    new CartaUno("Azul","2"),
    new CartaUno("Azul","3"),
    new CartaUno("Azul","4"),
    new CartaUno("Azul","5"),
    new CartaUno("Azul","6"),
    new CartaUno("Azul","7"),
    new CartaUno("Azul","8"),
    new CartaUno("Azul","9"),
    new CartaUno("Azul","Inverter"),
    new CartaUno("Azul","+2"),
    new CartaUno("Azul","Bloquear"),
    new CartaUno("Amarelo","0"),
    new CartaUno("Amarelo","1"),
    new CartaUno("Amarelo","2"),
    new CartaUno("Amarelo","3"),
    new CartaUno("Amarelo","4"),
    new CartaUno("Amarelo","5"),
    new CartaUno("Amarelo","6"),
    new CartaUno("Amarelo","7"),
    new CartaUno("Amarelo","8"),
    new CartaUno("Amarelo","9"),
    new CartaUno("Amarelo","Inverter"),
    new CartaUno("Amarelo","+2"),
    new CartaUno("Amarelo","Bloquear"),
    new CartaUno("Amarelo","1"),
    new CartaUno("Amarelo","2"),
    new CartaUno("Amarelo","3"),
    new CartaUno("Amarelo","4"),
    new CartaUno("Amarelo","5"),
    new CartaUno("Amarelo","6"),
    new CartaUno("Amarelo","7"),
    new CartaUno("Amarelo","8"),
    new CartaUno("Amarelo","9"),
    new CartaUno("Amarelo","Inverter"),
    new CartaUno("Amarelo","+2"),
    new CartaUno("Amarelo","Bloquear"),
    new CartaUno("Preta","+4"),
    new CartaUno("Preta","+4"),
    new CartaUno("Preta","+4"),
    new CartaUno("Preta","+4"),
    new CartaUno("Preta","MudarCor"),
    new CartaUno("Preta","MudarCor"),
    new CartaUno("Preta","MudarCor"),
    new CartaUno("Preta","MudarCor")
    
];

