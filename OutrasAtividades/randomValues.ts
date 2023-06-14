class ArrayRandomValues {
  getRandomValues(array: any[]): any[] {
    const result: any[] = [];

    while (result.length < array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomValue = array[randomIndex];

      if (!result.includes(randomValue)) {
        result.push(randomValue);
      }
    }

    return result;
  }
}

const produtos1: any[] = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lapis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.99 },
  { nome: "Estojo", qtde: 7, preco: 9.99 },
  { nome: "Teclado", qtde: 2, preco: 609.99 },
  { nome: "Tenis", qtde: 3, preco: 350.99 },
  { nome: "Fone", qtde: 5, preco: 198.99 },
  { nome: "Mochila", qtde: 15, preco: 150.99 },
];

const arrayRandomValues = new ArrayRandomValues();
const randomValues = arrayRandomValues.getRandomValues(produtos1);

console.log(randomValues);