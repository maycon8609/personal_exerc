function tabuada() {
    let num = document.getElementById('txtNum')
    let tab = document.getElementById('selTab')

    if (num.value.length == 0) {
        window.alert(' DIGITE UM NUMERO... ')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''

        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = ` ${n} x ${c} = ${n * c} `
            item.value = `tab${c}`
            tab.appendChild(item)
        }

        //tabelas de outras operações matematicas
        let divisao = document.getElementById('divisao')
        let adicao = document.getElementById('adicao')
        let subtracao = document.getElementById('subtracao')

        divisao.innerHTML = ''
        adicao.innerHTML = ''
        subtracao.innerHTML = ''

        for (let i = 1; i <= 10; i++) {
            //crindo o option de maneira dinamica 
            let itemDiv = document.createElement('option')
            let itemSum = document.createElement('option')
            let itemSub = document.createElement('option')

            itemDiv.text = ` ${n} / ${i} = ${n / i} `
            itemDiv.value = `tab1${i}`
            divisao.appendChild(itemDiv)

            itemSum.text = ` ${n} + ${i} = ${n + i} `
            itemSum.value = `tab2${i}`
            adicao.appendChild(itemSum)

            itemSub.text = ` ${n} - ${i} = ${n - i} `
            itemSub.value = `tab3${i}`
            subtracao.appendChild(itemSub)
        }

    }
}