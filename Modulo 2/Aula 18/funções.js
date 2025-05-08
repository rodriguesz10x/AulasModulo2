// FUNÇÕES JAVASCRIPT

// FUNÇÃO SEM PARAMETROS E SEM RETORNOS
// function mandar_mensagem(){
//     alert('Essa é a mensagem')
// }

// //FUNÇÃO COM PARAMETRO E SEM RETORNO
// function mandarmsgpersonalizada(nome){
//     alert('')
// }

//FUNÇÃO COM PARAMETRO E COM RETORNO
// function somar_numeros(n1, n2){
//     let soma = n1+n2
//     return soma
// }

// let soma = somar_numeros(15+20)
// alert(soma)

// function Verificar_paridade(numero){
//     if(numero % 2 == 0){
//         return 'par'
//     }else{
//         return 'ímpar'
//     }
// }

// let numero = Number(prompt('Digiter um numero: '))

// document.write(`O número é ${Verificar_paridade(numero)}`)

function verificar_faixa_etária(idade){
    if(idade > 0 && idade <= 12){
        return 'Criança'
    }else if(idade > 12 && idade <= 17){
        return 'Adolescente'
    }else if(idade > 17 && idade <= 59){
        return 'Adulto'
    }else{
        return 'Idoso'
    }
}

    // let idade = Number(prompt('Digite sua idade'))
    // document.write(`Você é ${verificar_faixa_etária(idade)}`)

    function depositar_valor(deposito,saldo){
        saldo += deposito
        return saldo
    }

    function sacar_valor(deposito,saldo){
        saldo -= deposito
        // alert(`Seu saldo é ${sacar_valor(deposito,saldo)}`)
        return saldo
    }

    function mostrar_saldo(saldo){
        return saldo
    }