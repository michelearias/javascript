function verificar() {
    var data = new Date()
    var ano = data.getFullYear() // pegar ano atual
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { // verifica se a caixa esta vazia ou se esta acima do ano atual
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade} anos`
        var genero = ''
        var img = document.createElement('img') // img id = 'foto'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png' )
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade > 10) {
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        

    } 
}