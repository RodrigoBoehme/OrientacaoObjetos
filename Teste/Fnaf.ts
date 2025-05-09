import { RND } from "./Random"

export class Animatronic {
    private name: string
    private Level: number
    Path: Array<Room>
    AtkDoor: Door
    private currentPosition: number = 0
    private gameState: boolean = false
    private currentRoom: Room
    private animatronic: Animatronic

    constructor(name: string, Level: number = 0, Path: Array<Room>, AttckDoor: Door) {
        this.name = name
        this.Level = Level
        this.Path = Path
        this.AtkDoor = AttckDoor
        this.animatronic = this
        this.currentRoom=Path[0]
    }

    getGameState(): boolean { return this.gameState }

    updateRoom(): void {
        this.currentRoom.removeAnimatronic(this)
        this.currentRoom = this.Path[this.currentPosition]

        this.currentRoom.addAnimatronic(this)
    }

    getRoom(): Room {
        return this.currentRoom
    }
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
        this.updateRoom()

    }
    checkPosition(): void {
        console.log(this.Path[this.currentPosition].getName())
    }

    chanceMovement(): void {
        if (this.Path[this.currentPosition].getAttackPossibility()) { this.Jumpscare() }
        else {
            let movementChance = Math.floor(Math.random() * 21)
            if (this.Level >= movementChance) {


                if (this.currentPosition > 1 && RND("F", 9) > 5) {
                    this.currentPosition--
                    console.log(-1)
                }
                else if (this.currentPosition < this.Path.length - 2 && RND('F', 6) > 3) {

                    console.log('+2')
                    this.currentPosition += 2
                }


                else {
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
    private animatronics: Array<Animatronic> = []

    constructor(Nome: string) {
        this.roomName = Nome
    }
    getName(): string { return this.roomName }
    getAttackPossibility(): boolean { return this.canJumpscare }

    removeAnimatronic(B: Animatronic) {

        if (this.animatronics.length > 0) {

            for (let i = 0; i < this.animatronics.length; i++) {
                if (this.animatronics[i].getName() === B.getName()) {
                    this.animatronics.splice(i, 1)
                }
            }
        }

        /*
        if (this.animatronics.length > 1) {
            for (let i = 0; i < this.animatronics.length; i++) {
                if (this.roomName !== this.animatronics[i].getRoom().getName())
                    this.animatronics.splice(i, 1)
            }
        }*/
    }
    addAnimatronic(A: Animatronic) {
        this.animatronics.push(A)
    }
    anyInside(): void {
        for (let i = 0; i < this.animatronics.length; i++) {
            console.log(this.animatronics[i].getName())
        }
    }
}

export class Door extends Room {
    private Status: boolean = false
    private light:boolean=false
    constructor(NomeDaPorta: string) {
        super(NomeDaPorta)
        this.canJumpscare = true
    }
    openDoor(): void { this.Status = true }
    closeDoor(): void { this.Status = false }
    lightOn():void{this.light=true}
    lightOff():void{this.light=false}

    isLightOn():boolean{return this.light}
    isDoorClosed(): boolean { return this.Status }
}

let PortaE = new Door('Porta Esquerda Escritorio')
let PortaD=new Door('Porta Direita Escritorio')
let Cam1a = new Room('Palco')
let Cam5 = new Room('Partes e Servicos')
let Cam1b = new Room('Salao')
let Cam1c=new Room('Pirate Cove')
let Cam2a = new Room('Corredor Esquerdo')
let Cam4a=new Room('Corredor Direito')
let Cam3 = new Room('Sala Limpeza')
let Cam2b = new Room('Lateral Esquerda Escritorio')
let Cam4b=new Room('Lateral Direita Escritorio')
let Cam7=new Room('Banheiros')
let Cam6=new Room('Cozinha')

let Bonnie = new Animatronic('Bonnie', 20, [], PortaE)



function loopLevel(Turns: number = 10) {

    for (let i = 0; i < Turns; i++) {

        if (RND('F', 20) > 10) {
            if (Math.floor(Math.random() * 51) > 25) {
                PortaE.closeDoor()
            } else { PortaE.openDoor() }
        }
        console.log('Porta E esta com a porta fechada? ' + PortaE.isDoorClosed())
        console.log('Turno ' + i)

        // Bonnie.checkPosition()

        Bonnie.movementCheck()
        if (Bonnie.getGameState()) {
            i = Turns
        }
    }
}
let salas = []
Cam1a.addAnimatronic(Bonnie)
PortaE.openDoor()
loopLevel(10)

/* for(let cams in salas){
    salas[cams].anyInside()
}*/