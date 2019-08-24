const valorMes = document.getElementById('valorMes')
const quantAnos = document.getElementById('quantAnos')
const taixaJuros = document.getElementById('taixaJuros')
const result = document.getElementById('result')

valorMes.focus()

var total = 0
var rendimentoAtual = 0

function calculator() {

  if (valorMes.value.length == 0 || quantAnos.value.length == 0 || taixaJuros.value.length == 0) {
    alert(' preencha todos os campos ')

    valorMes.focus()
  } else {

    total = 0
    rendimentoAtual = 0

    for (let i = 1; i <= Number(quantAnos.value); i++) {
      for (let j = 1; j <= 12; j++) {
        total += Number(valorMes.value)
        total += ((Number(taixaJuros.value) * total / 100) / 12)
      }
    }
    rendimentoAtual = ((Number(taixaJuros.value) * total / 100) / 12)

    result.innerHTML = ` montante total iqual a ${total.toFixed(2)} <br>
                       rendimento mensal atual iqual a ${rendimentoAtual.toFixed(2)} <br> `

    valorMes.value = ''
    quantAnos.value = ''
    taixaJuros.value = ''
    valorMes.focus()
  }
}