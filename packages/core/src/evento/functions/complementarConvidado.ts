import Convidado from '../model/Convidado'
import validarConvidado from './validarConvidado'

/**
 * Processa um objeto de convidado, validando suas propriedades e atualizando campos relacionados.
 *
 * @param {Partial<Convidado>} convidado - Objeto parcial representando um convidado.
 * @returns {Convidado} Um objeto do tipo `Convidado` com os campos processados e atualizados.
 * @throws {Error} Lança um erro com as mensagens de validação, caso existam problemas.
 */
export default function complementarConvidadoConvidado(
  convidado: Partial<Convidado>
): Convidado {
  // Valida o convidado e retorna uma lista de mensagens de erro, caso existam.
  const erros = validarConvidado(convidado)

  // Se houver erros na validação, lança uma exceção contendo todas as mensagens de erro concatenadas.
  if (erros.length > 0) {
    throw new Error(erros.join(', '))
  }

  // Determina a quantidade de acompanhantes. Se não for informada, assume o valor padrão `0`.
  const qtdeAcompanhantes = convidado.qtdeAcompanhantes ?? 0

  // Verifica se o convidado tem acompanhantes:
  // - Deve possuir a propriedade `possuiAcompanhantes` como `true`.
  // - Deve estar confirmado (`confirmado === true`).
  // - A quantidade de acompanhantes deve ser maior que 0.
  const temAcompanhantes =
    convidado.possuiAcompanhantes &&
    convidado.confirmado &&
    qtdeAcompanhantes > 0

  // Cria um novo objeto `Convidado` atualizado, com os campos ajustados:
  const convidadoAtualizado = {
    ...convidado, // Copia todas as propriedades originais do objeto convidado.
    qtdeAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0, // Define a quantidade de acompanhantes como 0 se as condições não forem atendidas.
    possuiAcompanhantes: temAcompanhantes // Atualiza o campo com base na lógica de verificação.
  }

  // Retorna o objeto atualizado, garantindo que esteja no formato completo do tipo `Convidado`.
  return convidadoAtualizado as Convidado
}
