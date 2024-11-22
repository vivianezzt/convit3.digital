/**
 * Classe utilitária para geração de identificadores únicos (IDs) aleatórios.
 */
import { v4 as uuid } from 'uuid'
export default class Id {
  /**
   * Gera um novo identificador único no formato `hash-hash-hash`.
   * Cada `hash` é gerado aleatoriamente usando valores baseados em números aleatórios.
   *
   * @returns {string} Um identificador único no formato "hash-hash-hash".
   */
  static novo(): string {
    // Gera um ID concatenando três hashes separados por hífens.
    return uuid()
  }
}

// Exemplo de uso: Geração de um novo ID único.
// console.log(Id.novo());
