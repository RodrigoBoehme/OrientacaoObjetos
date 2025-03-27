import { Animal } from "./animal";
import { Baleia } from "./marinhos";

// Função de simulação do ambiente

function simularAmbiente(animais: Animal[], tempoSimulacao: number = 10, numeroAcoe: number = 2): void {
    let a: Animal
    let b: Animal

    function animaisDaVez(animais: Array<Animal>) {
        let aOpcao = Math.floor(Math.random() * animais.length)
        let bOpcao = Math.floor(Math.random() * animais.length)
        a = animais[aOpcao]
        b = animais[bOpcao]
        while (a == b) {
            b = animais[Math.floor(Math.random() * animais.length)]
        }
    }

    function acaoAleatoriaAoQuadrado() {
        let randomYetAgain = Math.floor(Math.random() * 3);

        if (randomYetAgain === 0) { a.acaoAleatoria() }
        else if (randomYetAgain === 2 && animais.length > 1) { a.interagir(b); }
        else if(randomYetAgain===3 && animais.length>1){b.interagir(a)}
        else if (randomYetAgain === 1 && animais.length > 1) { b.acaoAleatoria(); }
        else { (console.log('Nada acontece')) }
    }
    if (animais.length > 0) {
        for (let t = 0; t < tempoSimulacao; t++) {
            console.log(`\n--- Onda ${t + 1} ---\n `);
            for (let x = 0; x < numeroAcoe; x++) {
                animaisDaVez(animais);

                acaoAleatoriaAoQuadrado()
            }

        }
    }

}

// Criando animais para o teste

let animalAquatico = new Baleia("Baleia");
let b = new Baleia('Flow')
let c = new Baleia('Jonny')
let d = new Animal('Tina', 'Capivarias')
// Lista de animais no ambiente
const animais: Animal[] = [animalAquatico, c, b, d];

// Simulando o ambiente por 3 ciclos de tempo
simularAmbiente(animais, 20,5);