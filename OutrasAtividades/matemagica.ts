export class Matemagica {
  adicao(a: number, b: number): number {
    return a + b;
  }

  subtracao(a: number, b: number): number {
    return a - b;
  }

  divisao(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
  }

  multiplicacao(a: number, b: number): number {
    return a * b;
  }
}