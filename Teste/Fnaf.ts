import { RND } from "./Random"

export class Animatronic {
    private name: string
    private Level: number
    Path: Array<Room>
    AtkDoor: Door
    private currentPosition: number = 0
    private gameState: boolean = false
    private firstMovement: boolean = false

    constructor(name: string, Level: number = 0, Path: Array<Room>, AttckDoor: Door) {
        this.name = name
        this.Level = Level
        this.Path = Path
        this.AtkDoor = AttckDoor
    }

    getGameState(): boolean { return this.gameState }


    Jumpscare(): void {
        if (this.AtkDoor.isDoorClosed()) {
            console.log('Jumpscare')
            this.gameState = true
        }
        else (this.currentPosition = 1)
    }
    resetGameState() {
        this.gameState = false
        console.log('Game has been reseted')
    }
    setDifficultLevel(level: number) {
        if (level > 20 || level < 0) {
            console.log('Invalid Number')
        } else {
            this.Level = level
        }
    }
    increaseDifficultLevel(): void {
        if (this.Level > 20) { this.Level += 1 }
        else (console.log('Max Level alredy'))
    }
    decreaseDiffiucltLevel(): void {
        if (this.Level > 0) { this.Level -= 1 }
        else (console.log('Min Level Alredy'))
    }
    getName(): string { return this.name }

    movementCheck(): void {
        this.chanceMovement()

    }
    checkPosition(): void {
        console.log(this.Path[this.currentPosition].getName())
    }

    chanceMovement(): void {
        if (this.Path[this.currentPosition].getAttackPossibility()) { this.Jumpscare() }
        else {
            let movementChance = Math.floor(Math.random() * 21)
            if (this.Level >= movementChance) {
                
                
                if(this.currentPosition>1 && RND("F",8)>5){
                    this.currentPosition--
                    console.log(-1)
                } 
                else if(this.currentPosition <this.Path.length-2&&RND('F',6)>3){

                    console.log('+2')
                    this.currentPosition+=2
                }
                

                else{
                    this.currentPosition++
                    console.log('+1')
                }
            }
        }
    }


}
export class AnimatronicV2 extends Animatronic {

    isBeingLookedAt: boolean = false

    movementCheck(): void {
        if (this.isBeingLookedAt == false) {
            this.chanceMovement()
        }
    }

    itWasSeen(): void {
        this.isBeingLookedAt = true
    }
    itWasNotSeen(): void {
        this.isBeingLookedAt = false
    }
}

export class Room {
    private roomName: string
    protected canJumpscare: boolean = false

    constructor(Nome: string) {
        this.roomName = Nome
    }
    getName(): string { return this.roomName }
    getAttackPossibility(): boolean { return this.canJumpscare }

}

export class Door extends Room {
    private Status: boolean = false
    constructor(NomeDaPorta: string) {
        super(NomeDaPorta)
        this.canJumpscare = true
    }
    openDoor(): void { this.Status = false }
    closeDoor(): void { this.Status = true }

    isDoorClosed(): boolean { return this.Status }
}

let PortaE = new Door('Porta Esquerda Escritorio')
let Cam1 = new Room('Palco')
let Cam2 = new Room('Partes e Servicos')
let Cam3 = new Room('Salao')
let Cam4 = new Room('Corredor Esquerdo')
let Cam5 = new Room('Sala Limpeza')
let Cam6 = new Room('Lateral Esquerda Escritorio')
let Bonnie = new Animatronic('Bonnie', 20, [Cam1, Cam3, Cam2, Cam4, Cam5, Cam6, PortaE], PortaE)



function loopLevel(Turns: number = 10) {

    for (let i = 0; i < Turns; i++) {

        if (RND('F', 20) > 10) {
            if (Math.floor(Math.random() * 51) > 25) {
                PortaE.closeDoor()
            } else { PortaE.openDoor() }
        }
        console.log('PortaE esta com a porta fechada? '+PortaE.isDoorClosed())
        console.log('Turno ' + i)
        
        Bonnie.checkPosition()

        Bonnie.movementCheck()
        if (Bonnie.getGameState()) {
            i = Turns
        }
    }
}
PortaE.openDoor()
loopLevel(20)