import { Id } from '../../shared'
import Convidado from '../model/Convidado'

export function criarConvidadoVazio(): Partial<Convidado> {
  return {
    id: Id.novo(),
    nome: '',
    email: '',
    confirmado: true,
    possuiAcompanhantes: false,
    qtdeAcompanhantes: 0
  }
}
/*
Explicação Geral:
Objetivo da função:

A função criarConvidadoVazio cria e retorna um objeto parcial (Partial<Convidado>)
do modelo Convidado, com valores padrão para inicialização.
É útil para cenários como formulários de cadastro de convidados, onde o objeto começa
com valores mínimos e será preenchido posteriormente.
Geração de ID:

Utiliza o método Id.novo() para gerar um identificador único para o convidado. Isso garante
que cada convidado tenha um ID exclusivo desde sua criação inicial.
Valores padrão para campos:

nome e email: Iniciam como strings vazias, indicando que esses campos ainda não foram preenchidos.
confirmado: Inicializa como true, assumindo que o convidado foi confirmado por padrão.
possuiAcompanhantes: Começa como false, indicando que o convidado não informou acompanhantes inicialmente.
qtdeAcompanhantes: Inicializado como 0, indicando que o convidado não está trazendo acompanhantes.
Retorno do objeto parcial:

A função retorna um objeto contendo propriedades de Convidado, mas que ainda pode ser modificado
ou complementado conforme necessário.
*/
