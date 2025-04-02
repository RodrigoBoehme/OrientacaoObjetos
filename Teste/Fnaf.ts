export class Animatronic {
    private name: string
    private Level: number
    private path: Array<Room>
    private currentPosition: number = 0


    constructor(name: string, Level: number = 0, Path: Array<Room>) {
        this.name = name
        this.Level = Level
        this.path = Path
    }
    RND(Type: String = 'F', Max: number=1, Min: number = 0): number {
        let ZaNumba: number
        if (Type === "F") {
            ZaNumba = Math.floor(Math.random() * (Max - Min) + Min);
        }
        else {
            if (Type === "C") {
            ZaNumba= Math.ceil(Math.random() * (Max - Min) + Min);
            }

        }
        return ZaNumba
    }

    movementCheck(): void {
        let movementChance = Math.floor(Math.random() * 21)
        if (this.Level >= movementChance) {
            if (this.RND()==1){}
            //this.currentPosition++
        }
    }
}
export class Room {
    private roomName: string

}