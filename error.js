function tratarErroElancar(erro){
    // trow new Erro(')
}

function imprimirNomeGritado(obj) {
    try {
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)