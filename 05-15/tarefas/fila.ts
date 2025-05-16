import { Documento } from "./documento";



export class Impressora {
    private fila: Array<Documento> = [];
    private status: string;
    private concluida: boolean

    public enfileirar(papelASerImprimido: Documento): void {
        this.fila.push(papelASerImprimido)
    }
    
    public print(): Documento | undefined {
        if(this.isEmpty()){
            console.log('A fila esta vazia')
        }
        if (this.fila.length > 0) {
            this.concluida=false;
            this.status = 'Imprimindo';
            console.log('wrrrrrrrrrr')
            console.log('o papel foi imprimido')
            this.status = 'ocioso';
            this.marcarConcluida();
            return this.fila.shift()

        }
    }

    private marcarConcluida(): void {
        this.concluida = true;
        console.log(`Tarefa "${this.fila[0].getNome()}" marcada como concluida.`);
    }

    public exibirStatus(): void {
        const status = this.concluida ? "Concluida" : "Pendente";
        console.log(`Tarefa: ${this.fila[0]} - Status: ${status}`);
    }


    public getStatus(): string 
    { return this.status }

    public isEmpty(): boolean {
        return this.fila.length == 0 
    }

    public olharFila(): Array<Documento>
    { return this.fila }
   
    
}

const doc1=new Documento('Documento 1','letras')
const doc2=new Documento('Documento 2','numeros')

const impressora = new Impressora();

impressora.enfileirar(doc2)
impressora.enfileirar(doc1)

impressora.print();
console.log(impressora.print());
impressora.print();