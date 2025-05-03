export class Animatronic {
    private name: string
    private Level: number
    Path: Array<Room>
    AtkDoor: Door
    private currentPosition: number = 0


    constructor(name: string, Level: number = 0, Path: Array<Room>, AttckDoor: Door) {
        this.name = name
        this.Level = Level
        this.Path = Path
        this.AtkDoor = AttckDoor
    }
    RND(Type: String = 'F', Max: number = 1, Min: number = 0): number {
        let ZaNumba: number
        if (Type.toUpperCase() === "F") {
            ZaNumba = Math.floor(Math.random() * (Max - Min) + Min);
        }
        else {
            if (Type.toUpperCase() === "C") {
                ZaNumba = Math.ceil(Math.random() * (Max - Min) + Min);
            }

        }
        return ZaNumba
    }
    Jumpscare(): void {
        if (this.AtkDoor.isDoorClosed()) { console.log('Jumpscare') }
        else (this.currentPosition = 1)
    }

    increaseDifficultLevel(): void {
        if (this.Level > 20) { this.Level += 1 }
        else (console.log('Max Level alredy'))
    }
    decreaseDiffiucltLevel(): void {
        if (this.Level > 0) { this.Level -= 1 }
        else (console.log('Min Level Alredy'))
    }

    movementCheck(): void {
        if (this.currentPosition === this.Path.length-1) {
            this.Jumpscare()
        }
        else {
            this.chanceMovement()
        }
    }
    checkPosition(): void {
        console.log(this.Path[this.currentPosition].getName())
    }

    chanceMovement(): void {
        let movementChance = Math.floor(Math.random() * 21)
        if (this.Level >= movementChance) {
                if (this.currentPosition < this.Path.length) {
                    this.currentPosition++
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

let PortaD = new Door('Porta Direita Escritorio')
let Cam1 = new Room('Palco')
let Cam2 = new Room('Partes e Servicos')
let Cam3 = new Room('Salao')
let Cam4 = new Room('Corredor Esquerdo')
let Cam5 = new Room('Sala Limpeza')
let Cam6 = new Room('Lateral Esquerda Escritorio')
let Bonnie = new Animatronic('Bonnie', 20, [Cam1, Cam2, Cam3, Cam4, Cam5, Cam6, PortaD], PortaD)



function loopLevel(Turns: number = 10) {

    for (let i = 0; i < Turns; i++) {
        if(Math.floor(Math.random()*51)>40){
            PortaD.closeDoor()
        }else{PortaD.openDoor()}

        Bonnie.movementCheck()
        Bonnie.checkPosition()
    }
}
PortaD.openDoor()
loopLevel()