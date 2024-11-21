import { Alias, Id, Senha } from "../../shared"; // Importa utilitários para geração de alias, IDs únicos e senhas.
import Evento from "../model/Evento"; // Importa o modelo `Evento`, que representa a estrutura de um evento.
import validarEvento from "./validarEvento"; // Importa a função responsável por validar os dados de um evento.

/**
 * Complementa um objeto parcial de evento com valores padrão e validações obrigatórias.
 *
 * @param {Partial<Evento>} eventoParcial - Um objeto parcial contendo as informações iniciais do evento.
 * @returns {Evento} Um objeto completo do tipo `Evento`, com os campos preenchidos ou complementados.
 * @throws {Error} Lança uma exceção se o evento não passar na validação.
 */
export default function complementarEvento(
  eventoParcial: Partial<Evento>,
): Evento {
  // Valida o evento parcial usando a função `validarEvento`.
  const erros = validarEvento(eventoParcial);

  // Se houver erros, lança uma exceção contendo todas as mensagens de erro concatenadas.
  if (erros.length) {
    throw new Error(erros.join("\n"));
  }

  // Cria o objeto completo do evento, complementando os campos que estão ausentes.
  const evento: Evento = {
    ...eventoParcial, // Copia todas as propriedades do objeto parcial.
    id: eventoParcial.id ?? Id.novo(), // Gera um ID único se não houver um ID fornecido.
    senha: eventoParcial.senha ?? Senha.nova(20), // Gera uma senha aleatória de 20 caracteres se não houver uma senha fornecida.
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1), // Converte o público esperado para um número, com valor padrão de 1.
  } as Evento;

  // Retorna o evento completo, agora preenchido com todos os campos necessários.
  return evento;
}
/*
Explicação Geral:
Objetivo da função:

Receber um evento parcial (Partial<Evento>), validar seus dados obrigatórios
e preencher campos ausentes com valores padrão, retornando um evento completo (Evento).
Validação do evento:

A função utiliza validarEvento para verificar se os dados do evento parcial
atendem às regras obrigatórias (ex.: campos obrigatórios, valores válidos).
Caso existam erros de validação, uma exceção é lançada com as mensagens detalhadas,
impedindo o processamento do evento incompleto.
Complementação de campos:

id: Se o campo id estiver ausente, utiliza Id.novo() para gerar um identificador único.
senha: Se o campo senha estiver ausente, utiliza Senha.nova(20) para criar uma senha
aleatória de 20 caracteres.
publicoEsperado: Converte o valor fornecido em um número, ou utiliza 1 como padrão se
o valor estiver ausente ou inválido.
Uso do operador ??:

O operador ?? verifica se os valores são null ou undefined e, nesse caso, aplica o valor padrão.
Retorno do objeto Evento:

Após a validação e complementação, o evento completo é retornado, pronto para ser usado ou salvo.
*/
