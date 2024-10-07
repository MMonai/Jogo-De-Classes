// Classe Pessoa para representar um personagem com nome e idade
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.perfil = this.definePerfil();  // Define o perfil no momento da criação
    }

    // Define o perfil do personagem com base no nome
    definePerfil() {
        let perfil;

        switch (this.nome) {
            case 'Aragorn':
                perfil = 'guerreiro';
                break;
            case 'Gandalf':
                perfil = 'mago';
                break;
            case 'Valuz Dargina':
                perfil = 'monge';
                break;
            case 'Narutin':
                perfil = 'ninja';
                break;
            default:
                perfil = 'personagem desconhecido';
        }

        return perfil;  // Agora retorna o perfil para ser usado mais tarde
    }

    // Método para exibir o perfil de uma vez
    exibirPerfil() {
        console.log(`O personagem ${this.nome} é de classe ${this.perfil}`);
    }
}
// Classe Heroi para definir o tipo de herói e seu ataque
class Heroi {
    constructor(tipo) {
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        // Determina o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'realizou um ataque genérico';
        }

        return ataque;  // Retorna o tipo de ataque
    }

    movimento(pessoa) {
        const ataque = this.atacar();  // O herói ataca
        console.log(`O personagem ${pessoa.nome} de classe ${pessoa.perfil} atacou usando ${ataque}`);
    }
}

// Criando instâncias da classe Pessoa

const pessoa1 = new Pessoa('Gandalf', 150);
const pessoa2 = new Pessoa('Aragorn', 35);
const pessoa3 = new Pessoa('Valuz Dargina', 32);
const pessoa4 = new Pessoa('Narutin', 28);

// Chamando o método exibirPerfil para cada pessoa (apenas uma vez)
pessoa3.exibirPerfil(); // O personagem Valuz Dargina é de classe monge
pessoa1.exibirPerfil(); // O personagem Aragorn é de classe guerreiro
pessoa2.exibirPerfil(); // O personagem Gandalf é de classe mago
pessoa4.exibirPerfil(); // O personagem Narutin é de classe ninja

// Criando instâncias da classe Heroi
const heroi1 = new Heroi('mago');
const heroi2 = new Heroi('guerreiro');
const heroi3 = new Heroi('monge');
const heroi4 = new Heroi('ninja');

// Chamando o método movimento para cada herói e associando uma pessoa
heroi1.movimento(pessoa1); // O personagem Aragorn de classe guerreiro atacou usando magia
heroi2.movimento(pessoa2); // O personagem Gandalf de classe mago atacou usando espada
heroi3.movimento(pessoa3); // O personagem Valuz Dargina de classe monge atacou usando artes marciais
heroi4.movimento(pessoa4); // O personagem Narutin de classe ninja atacou usando shuriken

console.log('Ninguém sobreviveu, FIM!!')