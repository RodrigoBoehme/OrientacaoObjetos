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

    movementCheck(): void {
        if (this.currentPosition > this.Path.length) {
            this.Jumpscare()
         }
         else{
        this.chanceMovement()
         }
    }

    chanceMovement(): void {
        let movementChance = Math.floor(Math.random() * 21)
        if (this.Level >= movementChance) {
            if (this.RND("F", 5, 1) === 5) {
                if (this.currentPosition < this.Path.length) {
                    if (this.currentPosition < this.Path.length - 1) {
                        if (this.RND() === 1) {
                            this.currentPosition += 2
                        }
                        else {
                            this.currentPosition++
                        }
                    }
                    else{
                        this.currentPosition--
                    }
                    
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
/*
let PortaD=new Door('Porta Direita Escritorio')

let Bonnie=new Animatronic('Bonnie',0,[],PortaD)
Bonnie.AtkDoor.openDoor()
console.log(PortaD.isDoorClosed())
Bonnie.AtkDoor.closeDoor()


console.log(PortaD.isDoorClosed())
*/