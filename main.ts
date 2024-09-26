import prompt from 'prompt-sync'; 
import { Controle } from './controleV';  

let control: Controle = new Controle(0, 10);
let teclado = prompt(); 
let option: number = 0;

while (option !== 3) { 
    console.log(`============== Menu =============`);
    console.log(`1. Selecione a  Velocidade Permitida   `);
    console.log(`2. Usar Turbo                    `);
    console.log(`3. Sair                            `);
    console.log(`===================================`);

    option = +teclado(`Selecione uma ação: `);

    switch (option) {
        case 1:
            let valor: number = +teclado(`velocidade permitida: `);
            control.setVelocidadePermitida(valor);  
            break;

        case 2:
            control.turbo();  
            break;

        case 3:
            console.log();
            break;

        default:
            console.log();
            break;        
    }
}
