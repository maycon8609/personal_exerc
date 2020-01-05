// MAYCON BOOT deixar de Sequir
let cont = 0
let arr = document.querySelectorAll('.L3NKy')
arr.forEach((v, i) => {
  setTimeout(() => {
    if (v.classList.contains('_8A5w5')) {
      v.click()
      cont++
      console.log('Deixou de sequir ' + cont + ' pessoas ')
    } else {
      console.log('Voce ja não seque este usuario ')
    }
  }, i * 10000)
})