let num = document.getElementById('entrada')
let lista = document.getElementById('lista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(Number(num.value)) && !inLista(Number(num.value), valores)) {
    valores.push(Number(num.value))
    valores.sort()
    let item = document.createElement('option')
    item.text = ` valor ${num.value} adicionado `
    lista.appendChild(item)
    resultado.innerHTML = ''
  } else {
    window.alert(' valor ivalido ou ja encontrado na lista ')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert(' adicione valores antes de finalizar ')
  } else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }
    media = soma / total
    resultado.innerHTML = ''
    resultado.innerHTML += `<p> foram adicionados ${total} numeros <p/>`
    resultado.innerHTML += `<p> o maior valor e ${maior} <p/>`
    resultado.innerHTML += `<p> o menor valor e ${menor} <p/>`
    resultado.innerHTML += `<p> soma dos valores iqual a ${soma} <p/>`
    resultado.innerHTML += `<p> a media e iqual a ${media} <p/>`
  }
}
