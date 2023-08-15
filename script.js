const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
const dataContainer = document.getElementById('data-container');

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Erro ao chamar a API');
    }

    const data = await response.json();

    // Cria um elemento de parágrafo para cada propriedade nos dados
    for (const key in data) {
      const paragraph = document.createElement('p');
      paragraph.textContent = `${key}: ${data[key]}`;
      dataContainer.appendChild(paragraph);
    }
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

// Chama a função para buscar e mostrar os dados
fetchData();