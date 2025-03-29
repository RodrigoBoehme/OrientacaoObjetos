export class Animatronic{
    private name:string
    private Level:number
    private path:Array<Room>
    private currentPosition:number=0


    constructor(name:string,Level:number=0,Path:Array<Room>){
        this.name=name
        this.Level=Level
        this.path=Path
    }

    movementCheck():void{
        let movementChance= Math.floor(Math.random()*21)
        if(this.Level>=movementChance){
            this.currentPosition++
        }
    }
}
export class Room{

}