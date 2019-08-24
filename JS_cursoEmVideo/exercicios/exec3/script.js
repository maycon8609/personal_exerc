function contar() {
    let start = document.getElementById('txtInit')
    let stop = document.getElementById('txtEnd')
    let pass = document.getElementById('pass')
    let res = document.getElementById('res')

    if (start.value.length == 0 || stop.value.length == 0 || pass.value.length == 0) {
        window.alert(' VERIFIQUE SE TODOS OS CAMPOS ESTAO PREENCHIDOS ')
    } else {
        res.innerHTML = 'contando... <br>'
        let i = Number(start.value)
        let f = Number(stop.value)
        let p = Number(pass.value)

        if (p <= 0) {
            window.alert(' passo invalido! considerando passo 1 ')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1f449} ${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1f449} ${c} `
            }
        }
        res.innerHTML += ` \u{1f3c1}`

    }
}