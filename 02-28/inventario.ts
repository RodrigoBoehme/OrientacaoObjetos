

const readline = require('readline-sync')

export class Inventario {
    private inventory: Array<any> = []
    private tipo: string = 'inventario'


    getType(): string { return this.tipo }
    addItem(a: any) {
        if (this.inventory.length == 36) {
            console.log('Inventario cheio')
        } else {
            if (a.getType() == 'entity') {
                console.log('sheeesh, vc acha q isso é poquemonios para guardar seres vivos?')
            }
            if (a.getType() == 'bloco' || 'weapon') { this.inventory.push(a) }
            if (a.getType() == 'inventario') { console.log('Colocar um inventario dentro de um inventario? nahhh') }
        }
    }
    showInventory(): void {
        if (this.inventory.length > 0) {
            console.log('Itens no inventario')
            for (let i = 0; i < this.inventory.length; i++) {
                console.log(`${i + 1}- ${this.inventory[i].getName()}`)
            }
        }
    }
    private showSlot(a: number) {
        a -= 1
        let vamoVerEssaBagaca = this.inventory[a].getType()
        if (vamoVerEssaBagaca == 'bloco') { console.log(this.inventory[a].getName(), this.inventory[a].getDurability()) }
        if (vamoVerEssaBagaca == 'weapon') { console.log(this.inventory[a].getName(), this.inventory[a].getDamage(), this.inventory[a].getDurability(), this.inventory[a].isItBroken()) }
    }
    showSlots(): void {
        this.showInventory()
        let opcao: number = readline.questionInt('Qual item voce quer ver?')
        if (opcao <= 0 || opcao > this.inventory.length) { console.log('Opcao Invalida') }
        else { this.showSlot(opcao) }
    }
    private removerItem(c: number) {
        this.inventory.splice(c - 1, 1)
    }
    itemRemoval() {
        this.showInventory()
        let opcao = readline.questionInt('Qual item voce quer remover?')
        if (opcao <= 0 || opcao > this.inventory.length + 1) { console.log('Opcao Invalida') }
        else { this.removerItem(opcao) }
    }


}


