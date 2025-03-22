import { Animal } from "./animal";
import { Baleia } from "./marinhos";

// Função de simulação do ambiente
function simularAmbiente(animais: Animal[], tempoSimulacao: number=10): void {



    for (let t = 0; t < tempoSimulacao; t++) {
        console.log(`\n--- Onda ${t + 1} ---\n ${animais[Math.floor(Math.random()*animais.length)].getFome()}`);
    }
   
}

// Criando animais para o teste

const animalAquatico = new Baleia("Baleia Baleia Baleia");

// Lista de animais no ambiente
const animais: Animal[] = [animalAquatico];

// Simulando o ambiente por 3 ciclos de tempo
simularAmbiente(animais, 20);