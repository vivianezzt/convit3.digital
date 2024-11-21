/**
 * Classe utilitária para geração de identificadores únicos (IDs) aleatórios.
 */
export default class Id {
  /**
   * Gera um novo identificador único no formato `hash-hash-hash`.
   * Cada `hash` é gerado aleatoriamente usando valores baseados em números aleatórios.
   *
   * @returns {string} Um identificador único no formato "hash-hash-hash".
   */
  static novo(): string {
    // Gera um ID concatenando três hashes separados por hífens.
    return `${this.hash()}-${this.hash()}-${this.hash()}`;
  }

  private static hash(): string {
    // Math.random(): gera um número aleatório entre 0 (inclusivo) e 1 (exclusivo).
    // .toString(36): converte o número para uma string em base 36 (usa dígitos e letras).
    // .substring(2, 15): remove os dois primeiros caracteres (`0.`) e retorna 13 caracteres.
    return Math.random().toString(36).substring(2, 15);
  }
}
// Exemplo de uso: Geração de um novo ID único.
// console.log(Id.novo());
