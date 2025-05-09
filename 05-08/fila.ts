// Queue

class fila<T>{
    private elementos: Array<T> = []

    enfileirar(item: T) {
        this.elementos.push(item)
    }
    desenfileirar(): T | undefined {
        if (this.estaVazia()) {
            console.log('A fila esta vazia')
            return undefined
        } return this.elementos.shift()
    }
    primeiro(): T | undefined {
        if (this.estaVazia()) {
            console.log("A fila esta vazia");
            return undefined;
        } return this.elementos[0]
    }
    estaVazia():boolean {
        return this.elementos.length===0
    }
    tamanho():number{
        return this.elementos.length
    }

}

// exemplo de uso da fila

const filaDeClientes=new fila<string>()
filaDeClientes.enfileirar('Cliente 1')
filaDeClientes.enfileirar('Cliente 2')
filaDeClientes.enfileirar('Cliente 3')
console.log('Proximo cliente a ser atendido: '+filaDeClientes.desenfileirar())
console.log('Proximo cliente a ser atendido: '+filaDeClientes.desenfileirar())
console.log('A fila esta vazia? '+filaDeClientes.estaVazia())