// Função para carregar os produtos
async function loadProducts() {
  try {
    // Realizando a requisição GET para a rota /produtos
    const response = await fetch('/produtos');
    if (!response.ok) {
      throw new Error('Falha ao carregar produtos');
    }
    const produtos = await response.json();

    const listaProdutos = document.getElementById('produtos-list');  // Alterado para id correto
    listaProdutos.innerHTML = ''; // Limpar conteúdo existente

    // Exibindo os produtos
    produtos.forEach(produto => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Marca:</strong> ${produto.marca}</p>
        <p><strong>Valor:</strong> R$ ${produto.valor}</p>
        <p>${produto.descricao}</p>
      `;
      listaProdutos.appendChild(li);
    });
  } catch (error) {
    console.error('Erro ao carregar produtos:', error);
  }
}

// Função para carregar os feedbacks
async function loadFeedbacks() {
  try {
    // Realizando a requisição GET para a rota /feedbacks
    const response = await fetch('/feedbacks');
    if (!response.ok) {
      throw new Error('Falha ao carregar feedbacks');
    }
    const feedbacks = await response.json();

    const listaFeedbacks = document.getElementById('feedbacks-list');  // Alterado para id correto
    listaFeedbacks.innerHTML = ''; // Limpar conteúdo existente

    // Exibindo os feedbacks
    feedbacks.forEach(feedback => {
      const div = document.createElement('div');
      div.classList.add('feedback-item');
      div.innerHTML = `
        <p><strong>Cliente:</strong> ${feedback.cliente}</p>
        <p><strong>Avaliação:</strong> ${feedback.avaliacao}</p>
        <p>${feedback.comentario}</p>
      `;
      listaFeedbacks.appendChild(div);
    });
  } catch (error) {
    console.error('Erro ao carregar feedbacks:', error);
  }
}

// Carregar produtos e feedbacks na inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadProducts();
  loadFeedbacks();
});
