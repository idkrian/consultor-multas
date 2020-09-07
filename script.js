function calcular(){
    var num = document.getElementById('vel')
    var res = document.getElementById('resultado')
    var vel = num.value
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    var velatual = ''
    var txtvel = ''

    if (vel == 0 || vel > 500){
        alert('Valor Inválido')
    } else {
        if (vel >= 80){
            txtvel = 'Você foi multado por excesso de velocidade!'
            img.setAttribute('src', 'imagens/multa.jpg')
            res.innerHTML = `<p>Você estava a ${vel}KM/H e ${txtvel}</p>`
        }
        else{
            txtvel = 'estava na velocidade permitida da via!'
            img.setAttribute('src', 'imagens/ok.jpg')
            res.innerHTML = `<p>Você estava a ${vel}KM/H e ${txtvel}</p>`
        }
    } 
    res.appendChild(img)

}