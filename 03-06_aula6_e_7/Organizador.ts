import { Distrito } from "./distrito";
import { Tributo } from "./tributo";

export class Organizador {
    private nome: string;
    public distritos: Array<Distrito> = [];
    private tributo: Array<Tributo>

    constructor(nome: string, destrito: Array<Distrito>,atributosss:Array<Tributo>) {
        this.nome = nome;
        this.distritos = destrito;
        this.tributo=atributosss


    }
    // falta criatividade

    public getnome(): string {
        return this.nome;
    }

    public getdistrito(): Array<any> {
        return this.distritos;
    }

    Adistritos(): void {
        const escolha = ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º', '11º', '12º', '13º'];
    }
    // Método para exibir detalhes


    public exibirTributos(Tributo) {
        console.log(`E o novo tributo escolhido ${Tributo.getnome()}, do distrito${Tributo.getdistrito().getDistritoName()}`);

        let tributo1 = Math.floor(Math.random() * 4);
        this.tributo.push(new Tributo('asjdsflh', new Distrito('jfsdhjskfj', ['Nononoo'], 8001), []));
    }

    // Método para liberar animais
    liberarAnimais(): void {
        console.log(`${this.nome} está liberando os animais!`);
    }


    // Método para criar um desastre
    criarDesastre(): number {
        console.log(`${this.nome} está criando um desastre nos distritos!`);
        let i=Math.floor(Math.random()*this.distritos.length)
        console.log(`Desastre em ${this.distritos[i].getDistritoNome()}!`);

        return Math.floor(Math.random() * 100 + 1)

    }

    // Método para escolher um distrito aleatório e realizar uma ação
    private escolherDistritoAleatorio(): Distrito | null {
        if (this.distritos.length === 0) {
            console.log("Nenhum distrito registrado.");
            return null;
        } else{
        const randomIndex = Math.floor(Math.random() * this.distritos.length); // Escolher um índice aleatório
        return this.distritos[randomIndex];
        }
    }

    // Método para realizar uma ação aleatória em um distrito aleatório
    realizarAcaoAleatoria(): void {
        const acao = Math.floor(Math.random()*100+1)  // Escolhe aleatoriamente entre 'liberarAnimais' e 'criarDesastre'
        const distritoAleatorio = this.escolherDistritoAleatorio();

        
            console.log(`Ação aleatória no ${distritoAleatorio.getDistritoNome()}:`);
            if (acao >=50 ) {
                this.liberarAnimais();
                distritoAleatorio.monstrosMonsturosos(this.criarDesastre())
            } else {
                distritoAleatorio.desastresDesastrosos(this.criarDesastre());
            }
        
    }
}

