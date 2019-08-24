const valorInit = document.getElementById('valorInit')
const valorMes = document.getElementById('valorMes')
const quantAnos = document.getElementById('quantAnos')
const taixaJuros = document.getElementById('taixaJuros')
const result = document.getElementById('result')

valorInit.focus()

var total
var rendimentoAtual = 0


function calculator() {

  if (valorInit.value.length == 0) {
    total = 0
  } else {
    total = Number(valorInit.value)
  }

  if (valorMes.value.length == 0 || quantAnos.value.length == 0 || taixaJuros.value.length == 0) {
    alert(' preencha todos os campos ')

    valorMes.focus()
  } else {

    for (let i = 1; i <= Number(quantAnos.value); i++) {
      for (let j = 1; j <= 12; j++) {
        total += Number(valorMes.value)
        total += ((Number(taixaJuros.value) * total / 100) / 12)
      }
    }
    rendimentoAtual = ((Number(taixaJuros.value) * total / 100) / 12)

    result.innerHTML = ` Com um valor inicial de R$ ${valorInit.value},<br> 
                         investindo R$ ${Number(valorMes.value)}  por mes durante ${Number(quantAnos.value)} anos a ${Number(taixaJuros.value)}% ao ano, <br>
                         montante total iqual a ${total.toFixed(2)} <br>
                         rendimento mensal atual iqual a ${rendimentoAtual.toFixed(2)} <br> `

    valorInit.value = ''
    valorMes.value = ''
    quantAnos.value = ''
    taixaJuros.value = ''
    valorInit.focus()
  }
}