let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');

        function verificarChute() {
            let chute = document.querySelector('input').value;
            // se chute for igual ao numero secreto
            if (chute == numeroSecreto) {
                //a função está trazendo no título o texto "acertou"
                exibirTextoNaTela('h1', 'Acertou!');
                //palavraTentativa = tentativas é maior que 1? se for maior então exibe "tentativas", se não exibe "tentativa"
                let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
                //mensagemTentativas = ao texto + o numero da variavel de 'tentativas' + a variavel que identifica se será no plural ou singular.
                let mensagemTentativas = (`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`);
                //a função está trazendo no paragrafo a variavel.
                exibirTextoNaTela('p', mensagemTentativas );
                //referencia no html pelo ID e remove o atributo de desabilitado.
                document.getElementById('reiniciar').removeAttribute('disabled');
                limparCampo();
            }  else {
                if (chute > numeroSecreto){
                    exibirTextoNaTela('p', 'O numero é menor');
                } else {
                exibirTextoNaTela('p', 'O numero é maior');
                }
            tentativas++
            limparCampo();
            }
            
        }
        

    function gerarNumeroAleatorio() {
        let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length
        if(quantidadeDeElementosNaLista == numeroLimite){
            listaDeNumerosSorteados = [];
        }
        //o "includes" verifica se já existe o numero dentro da lista.
        if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        //se tiver, vai rodar a função novamente;
            return gerarNumeroAleatorio();
        } else {
        //para adicionar o numero na lista é necessário colocar o ".push"
            listaDeNumerosSorteados.push(numeroEscolhido);
            console.log(listaDeNumerosSorteados);
           return numeroEscolhido;
        }
    }

    function limparCampo() {
        chute = document.querySelector('input');
        chute.value = '';
    }

    function reiniciarJogo(){
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
        //setando o botão de reiniciar como desabilitado.
        document.getElementById('reiniciar').setAttribute('disabled', true)
    }