let botao = window.document.getElementById('botao')
botao.addEventListener('click', tabuada)

function tabuada() {
  let numero = window.document.getElementById('numero')
  let res = window.document.getElementById('res')
  res.innerHTML = 'Tabuada :</br>'
  if (numero.value.length == 0) {
    window.alert('[ERRO] Falta de dados!')
    res.innerHTML = '<strong>FALHA NO PROCESSAMENTO</strong>'
  } else {
    for (let i = 0; i <= 10; i++) {
      let n = Number(numero.value)
      let multi = n * i
      res.innerHTML += `${n} * ${i} = ${multi}</br>`
      console.log('\n')
    }
  }
}
