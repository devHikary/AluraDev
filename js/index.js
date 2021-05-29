const areaDoCodigo = document.querySelector('.codigo')
const linguagem = document.querySelector('.selectLinguagem')
const botao = document.querySelector('.botaoVisualizar')

const inputColor = document.querySelector('[data-color]');

inputColor.addEventListener('input', (evento)=>{

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

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})