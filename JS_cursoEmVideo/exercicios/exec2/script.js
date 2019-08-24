function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoDigitado = document.getElementById('txtAno')
    var result = document.getElementById('resultado')

    if (anoDigitado.value.length == 0 || Number(anoDigitado.value) > anoAtual) {
        result.innerHTML = 'ERRO!!! VERIFIQUE OS DADOS E TENTE NOVAMENTE '
    } else {
        var idade = anoAtual - Number(anoDigitado.value)
        var sex = document.getElementsByName('radSex')
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            gender = ' HOMEM '
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/criancam.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemm.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adultom.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosom.jpg')
            }
        } else if (sex[1].checked) {
            gender = ' MULHER '
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'img/criancaf.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/jovemf.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/adultof.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosof.jpg')
            }
        }

        result.style.textAlign = 'center'
        result.innerHTML = ` ${gender} de ${idade} anos `
        result.appendChild(img)

    }
}