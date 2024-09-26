export class Controle {
    private velocidadeAtual: number;
    private velocidadeMaxima: number;

    constructor(velocidadeAtual: number = 0, velocidadeMaxima: number = 10) {
        this.velocidadeAtual = velocidadeAtual;
        this.velocidadeMaxima = velocidadeMaxima;
    }

    
    public setVelocidadePermitida(velocidade: number): void {
        if (velocidade < 0) {
            console.log("A velocidade permitida não pode ser menor que 0");
            return;
        }
        this.velocidadeMaxima = velocidade;
        console.log(`Velocidade permitida ajustada para: ${this.velocidadeMaxima} km/h`);
    }

    
    public turbo(): void {
        const incremento = Math.floor(Math.random() * 30) + 10; 
        this.velocidadeAtual += incremento; 
        console.log(`Turbo ativado! Velocidade atual: ${this.velocidadeAtual} km/h`);

        
        if (this.velocidadeAtual > this.velocidadeMaxima) {
            const excesso = this.velocidadeAtual - this.velocidadeMaxima;
            console.log(` Você recebeu uma multa pois excedeu a velocidade permitida de ${this.velocidadeMaxima} km/h por ${excesso} km/h.`);
        }
    }

    
    public setVelocidadeAtual(velocidade: number): void {
        this.velocidadeAtual = velocidade;
        console.log(`Velocidade atual definida para: ${this.velocidadeAtual} km/h`);
    }
}
