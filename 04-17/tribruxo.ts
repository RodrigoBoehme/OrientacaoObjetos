import { magicCreatures } from "./magicCreatures";

function evento(participantes: Array<magicCreatures>) {
    while (participantes.length > 1) {
        if (participantes.length > 1) {
            let p1 = participantes[Math.floor(Math.random() * participantes.length)]
            let p2 = participantes[Math.floor(Math.random() * participantes.length)]
            while (p1 === p2) { p2 = participantes[Math.floor(Math.random() * participantes.length)] }

            console.log(`${p1.getName()} enters in a duel with ${p2.getName()}\n`)
            console.log(`${p1.getName()} attacks with a power of ${p1.getPower()}`)
            console.log(`${p2.getName()} attacks with a power of ${p2.getPower()}`)

            let result = p1.getPower() - p2.getPower()
            if (result == 0) {
                let a = Math.floor(Math.random() * 100)
                let b = 50
                if (a > b) {
                    console.log(`${p1.getName()} Wins`);
                    for (let i = 0; i < participantes.length; i++) {
                        if (p2.getName() === participantes[i].getName()) {
                            participantes.splice(i, 1)
                        }
                    }
                }
                else (console.log(`${p2.getName()} Wins`))
                for (let i = 0; i < participantes.length; i++) {
                    if (p1.getName() === participantes[i].getName()) {
                        participantes.splice(i, 1)
                    }
                }


            }
            else if (result > 0) { console.log(`${p1.getName()} wins`) }
            else { console.log(`${p2.getName()} Wins`) }


        }
    }
    if (participantes.length == 1) { console.log(`${participantes[0]} won the event`) }
}
