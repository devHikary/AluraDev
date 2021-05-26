const inputColor = document.querySelector('[data-color]');

inputColor.addEventListener('input', (evento)=>{

  evento.preventDefault();
  const valor = inputColor.value;
  document.getElementById('quadroColor').style.backgroundColor = valor; 
})
