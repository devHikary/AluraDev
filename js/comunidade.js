const listaProjetos = document.querySelector('.quadros')

new function () {
  mostraProjetos()
}

function mostraProjetos() {
  if (localStorage.length <= 0) {
    return
  }
  let projetos = []
  for (let i = 0; i < localStorage.length; i++) {
    projetos.push(JSON.parse(localStorage.getItem(i)))
  }
  projetos.forEach(projeto => {
    const cartao = criaCartao(projeto)
    listaProjetos.innerHTML += cartao
    const codigoHtml = listaProjetos.querySelector(`[data-id="${projeto.id}"]`)
    codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    
    const codigo = codigoHtml.querySelector('code')
    hljs.highlightBlock(codigo)

    codigoHtml.querySelector('#quadroColor').style.backgroundColor = projeto.detalhesDoProjeto.cor
  })
}

function criaCartao(projeto) {
  const cartao = `
    <div class="quadro-container" data-id="${projeto.id}">
          <div class="quadro" id="quadroColor">
            <div class="editor">
              <div class="dot-container">
                <div class="dot macRed"></div>
                <div class="dot macYellow"></div>
                <div class="dot macGreen"></div>
              </div>
              <div class="codigo" >
                <code class="fonteCodigo hljs ${projeto.detalhesDoProjeto.linguagem}"></code>
              </div>
            </div>
          </div>
          <h2 class="tituloProjeto">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
          <p class="descricaoProjeto">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
          <div class="icone-container">
            <img class="iconeComentaLike" src="./img/comunidade/iconeComentario.png">
            <p class="numero">9</p>
            <img class="iconeComentaLike" src="./img/comunidade/iconeLike.png">
            <p class="numero">9</p>
            <div  class="autor-container">
              <img class="iconeComentaLike" src="./img/comunidade/iconeAutor.png">
              <p class="numero">@Harry</p>
            </div>
          </div>
    `
  return cartao
}