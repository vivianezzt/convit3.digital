import Evento from "../model/Evento";

/**
 * Função para validar as propriedades de um evento.
 *
 * @param {Partial<Evento>} evento - Objeto parcial representando um evento.
 * @returns {string[]} Lista de mensagens de erro caso existam problemas de validação.
 */
export default function validarEvento(evento: Partial<Evento>): string[] {
  // Array que armazenará todas as mensagens de erro de validação.
  const erros: string[] = [];

  // Verifica se a propriedade `alias` foi fornecida.
  if (!evento.alias) {
    erros.push("Alias é obrigatório");
  }

  // Verifica se a propriedade `nome` foi fornecida.
  if (!evento.nome) {
    erros.push("Nome é obrigatório");
  }

  // Verifica se a propriedade `descricao` foi fornecida.
  if (!evento.descricao) {
    erros.push("Descrição é obrigatória");
  }

  // Verifica se a propriedade `data` foi fornecida.
  if (!evento.data) {
    erros.push("Data é obrigatória");
  }

  // Verifica se a propriedade `local` foi fornecida.
  if (!evento.local) {
    erros.push("Local é obrigatório");
  }

  // Verifica se a propriedade `publicoEsperado` foi fornecida e se é maior ou igual a 1.
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push("Público esperado é obrigatório");
  }

  // Verifica se a propriedade `imagem` foi fornecida.
  if (!evento.imagem) {
    erros.push("Imagem é obrigatória");
  }

  // Verifica se a propriedade `imagemBackground` foi fornecida.
  if (!evento.imagemBackground) {
    erros.push("Imagem de fundo é obrigatória");
  }

  // Retorna o array de mensagens de erro acumuladas.
  return erros;
}
