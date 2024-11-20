/**
 * Classe utilitária para geração de senhas aleatórias.
 */
export default class Senha {
  static nova(arg0: number): string {
    throw new Error("Method not implemented.");
  }
  /**
   * Gera uma senha aleatória com base em diferentes grupos de caracteres.
   *
   * @param {number} tamanho - O tamanho desejado para a senha. O valor padrão é 8.
   * @returns {string} Uma senha aleatória contendo letras (maiúsculas e minúsculas), números e caracteres especiais.
   */
  static criar(tamanho: number = 8): string {
    // Grupo de caracteres disponíveis para compor a senha.
    const minusculas = 'abcdefghijklmnopqrstuvwxyz'; // Letras minúsculas.
    const maiusculas = minusculas.toUpperCase();      // Letras maiúsculas.
    const numeros = '0123456789';                     // Dígitos numéricos.
    const especiais = "!@#$%&*";                      // Caracteres especiais.

    // Agrupando os tipos de caracteres em um array.
    const grupos = [minusculas, maiusculas, numeros, especiais];

    // Array para construção da senha.
    const senha = [];

    // Gera cada caractere da senha aleatoriamente.
    for (let i = 0; i < tamanho; i++) {
      // Seleciona aleatoriamente um grupo de caracteres.
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];

      // Seleciona aleatoriamente um caractere dentro do grupo escolhido.
      senha.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }

    // Converte o array de caracteres em uma string e retorna.
    return senha.join('');
  }
}

// Exemplo de uso: Geração de uma senha com 30 caracteres.
// console.log(Senha.criar(30));
