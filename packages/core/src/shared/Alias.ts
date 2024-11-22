// Definindo uma classe chamada Alias
export default class Alias {
  // Método estático chamado 'formatar' que recebe um valor do tipo string
  static formatar(valor: string): string {
    // Substitui todos os espaços (' ') por underscores ('_') e, em seguida, converte a string para minúsculas
    return valor.replace(/ /g, '_').toLowerCase()
  }
}
