function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // limpa a área antes de iniciar a tabuada
        while (c <= 10) {
            let item = document.createElement('option') // CRIAR ELEMENTOS DENTRO DO SELECT
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //mostrar qual elemento foi selecionado
            tab.appendChild(item) // adicionar elemento filho
            c++
        }
    }
}