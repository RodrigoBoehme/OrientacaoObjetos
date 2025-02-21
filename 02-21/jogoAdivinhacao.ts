const readline = require('readline-sync')

const numeroAleatorio: string = (Math.random() * 100).toFixed(0)
const nAh:number=Number(numeroAleatorio)
console.log(numeroAleatorio)
let numerodeTentativas:number=1;

function adivinhaocao() {
    while (true) {

        
        let sla: number = readline.questionInt('bruh?')
        console.log(sla)
        if(sla==999){
            console.log('ya quitting? loseeeeer')
            console.log('desistiu depois de '+numerodeTentativas+' tentativas')
            return;
        }
        if(nAh>sla){
            console.log('Hehe, thi numba is 2 low')
            numerodeTentativas++
        }
        if(nAh<sla){
            console.log('Thy number is too high, try again')
            numerodeTentativas++
        }
        if(nAh==sla){
            console.log('Ya win')
            console.log('numero de tentativas '+numerodeTentativas)
            return;
        }
        
    }
}
adivinhaocao()