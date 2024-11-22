import { v4 as uuid, validate } from 'uuid'

// Classe para geração e validação de UUIDs
export default class Id {
  // Gera um novo UUID
  static novo(): string {
    return uuid()
  }

  // Verifica se um UUID é válido
  static valido(id: string): boolean {
    return validate(id)
  }
}

console.log(Id.novo())
