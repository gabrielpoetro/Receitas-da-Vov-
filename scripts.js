// Função para imprimir uma receita
function imprimirReceita(id) {
  const receita = document.getElementById(id).innerHTML;
  const janela = window.open('', '', 'width=800,height=600');
  janela.document.write('<html><head><title>Imprimir Receita</title></head><body>');
  janela.document.write(receita);
  janela.document.write('</body></html>');
  janela.document.close();
  janela.print();
}

// Função para favoritar uma receita (salva no navegador)
function favoritarReceita(id) {
  let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  if (!favoritos.includes(id)) {
    favoritos.push(id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
    alert("Receita adicionada aos favoritos!");
  } else {
    alert("Essa receita já está nos favoritos.");
  }
}

// Função para compartilhar uma receita
function compartilharReceita(id) {
  const receita = document.getElementById(id).querySelector('h3').innerText;
  if (navigator.share) {
    navigator.share({
      title: "Receita da Vovó",
      text: `Olha essa receita incrível: ${receita}`,
      url: window.location.href
    });
  } else {
    alert("Compartilhamento não suportado neste navegador.");
  }
}
