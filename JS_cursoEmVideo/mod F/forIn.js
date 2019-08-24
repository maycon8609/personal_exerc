var vet = [8, 3, 6, 9, 8, 7, 1]

for (let pos = 0; pos < vet.length; pos++) {
    console.log(` posicao ${pos} : valor ${vet[pos]} `)
}

console.log(` ##################################### `)

for (let pos in vet) {
    console.log(` posicao ${pos} : valor ${vet[pos]} `)
}