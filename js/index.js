const areaDoCodigo = document.querySelector('.codigo')
const linguagem = document.querySelector('.selectLinguagem')
const botaoPreview = document.querySelector('.botaoVisualizar')

const tituloProjeto = document.querySelector('.inputNomeProjeto')
const descricaoProjeto = document.querySelector('.inputDescricao')
const botaoSalvar = document.querySelector('.botaoSalvar')

const inputColor = document.querySelector('[data-color]');

inputColor.addEventListener('input', (evento) => {

  evento.preventDefault();
  const valor = inputColor.value;
  document.getElementById('quadroColor').style.backgroundColor = valor;
})

function mudaLinguagem() {
  const codigo = areaDoCodigo.querySelector('code')
  areaDoCodigo.innerHTML = `<code class="fonteCodigo hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
  areaDoCodigo.firstChild.innerText = codigo.innerText
}

linguagem.addEventListener('change', () => {
  mudaLinguagem()
})

botaoPreview.addEventListener('click', () => {
  const codigo = areaDoCodigo.querySelector('code')
  hljs.highlightBlock(codigo)
})

botaoSalvar.addEventListener('click', () => {
  if (typeof(Storage) !== "undefined") {
      console.log('Yay, support!')
      const projeto = montaProjeto()
      salvaLocalStorage(projeto)
  } else {
      console.log('Nay, no support!')
  }
})

function montaProjeto() {
  let projeto = {
    'id': localStorage.length,
    'detalhesDoProjeto': {
      'nomeDoProjeto': tituloProjeto.value,
      'descricaoDoProjeto': descricaoProjeto.value,
      'linguagem': linguagem.value,
      'codigo': areaDoCodigo.querySelector('code').innerText
    }
  }
  return projeto
}

function salvaLocalStorage(objetoJson) {
  localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}