//Escreva uma função chamada snapCrackle que leva um parâmetro denominado: maxValue.
//Esta função deve fazer um loop de 1 até maxValue (inclusive) e montar uma string com as seguintes condições para cada número:
//Se o número for ímpar, no lugar dele, concatenar "Snap" no final da string.
//Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle" no final da string.
//Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle" no final da string.
//Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
//Seus itens devem ser separados sempre por vírgula e espaço (veja o exemplo).
//Esta função deve retornar a string obtida

function snapCrackle(maxValue) {
    let resultado = ' '

    for (let i = 1; i <= maxValue; i++) {
        if (i % 5 === 0 && i % 2 === 1) {
            resultado += 'SnapCrackle, '
        } else if (i % 5 === 0) {
            resultado += 'Crackle, '
        } else if (i % 2 === 1) {
            resultado += 'Snap, '
        } else {
            resultado += i + ', '
        }
    }

    return resultado.slice(0, resultado.length - 2)
}

console.log(snapCrackle(12))

//Bônus:
//Importante!
//Lembrando que a função Bônus a seguir é um pouco mais avançada que a anterior e Não é Obrigatória
//
//Escreva uma segunda função chamada snapCracklePrime que recebe um parâmetro denominado: maxValeu e segue as mesmas regras da anterior, apenas com um adicional:
//
//Se o número for primo, no lugar dele, concatenar "Prime" no final da string

function snapCracklePrime(maxValue) {
    let string = "";
    for (let i = 1; i <= maxValue; i++) {
        if (i % 5 === 0 && i % 2 !== 0 && isPrime(i)) {
            string += "SnapCracklePrime" + ", ";
        } else if (i % 5 === 0 && i % 2 !== 0) {
            string += "SnapCrackle" + ", ";
        } else if (i % 5 === 0 && isPrime(i)) {
            string += "CracklePrime" + ", ";
        } else if (i % 5 === 0) {
            string += "Crackle" + ", ";
        } else if (i % 2 !== 0 && isPrime(i)) {
            string += "SnapPrime" + ", ";
        } else if (i % 2 !== 0) {
            string += "Snap" + ", ";
        } else if (isPrime(i)) {
            string += "Prime" + ", ";
        } else {
            string += i + ", ";
        }
    }
    string = string.slice(0, -2);
    return string;
//Funçãp complementar
    function isPrime(maxNum) {
        if (maxNum <= 1) {
            return false;
        }
        if (maxNum === 2) {
            return true;
        }
        for (let i = 2; i < maxNum; i++) {
            if (maxNum % i === 0) {
                return false;
            }
        }
        return true;
    }
}


console.log(snapCracklePrime(10));