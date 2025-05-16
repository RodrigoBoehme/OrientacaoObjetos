abstract class imprimir {
    protected Titulo: string
    protected Descricao: string
    protected concluida: boolean




abstract executar ():void;



marcarConcluida(): void {
    this.concluida = true;
    console.log(`Tarefa "${this.Titulo}" marcada como concluida.`);
}
exibirStatus(): void {
    const status = this.concluida ? "Concluida" : "Pendente";
    console.log(`Tarefa: ${this.Titulo} - Status: ${status}`);
  }
}

