import Convidado from "../model/Convidado";

/**
 * Função para validar as propriedades de um convidado.
 * @param {Partial<Convidado>} convidado - Objeto parcial representando um convidado.
 * @returns {string[]} Lista de mensagens de erro de validação.
 */
export default function validarConvidado(
  convidado: Partial<Convidado>,
): string[] {
  const erros: string[] = [];

  // Verifica se o nome foi fornecido.
  if (!convidado.nome) {
    erros.push("Nome é obrigatório");
  }

  // Verifica se o e-mail foi fornecido.
  if (!convidado.email) {
    erros.push("E-mail é obrigatório");
  }

  // Retorna a lista de erros acumulados.
  return erros;
}
