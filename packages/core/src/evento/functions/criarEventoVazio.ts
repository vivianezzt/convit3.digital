import { Id } from '../../shared' // Importa uma classe/utilitário responsável por gerar identificadores únicos.
import Evento from '../model/Evento' // Importa o modelo `Evento`, que representa a estrutura de um evento.

/**
 * Cria um objeto de evento com valores padrão (inicialmente vazio).
 *
 * @returns {Partial<Evento>} Um objeto parcial de `Evento` contendo valores iniciais padrão.
 */
export default function criarEventoVazio(): Partial<Evento> {
  return {
    // Gera um identificador único para o evento.
    id: Id.novo(),

    // Define valores padrão para as propriedades do evento.
    nome: '', // Nome do evento (inicialmente vazio).
    descricao: '', // Descrição do evento (inicialmente vazia).
    data: new Date(), // Data atual como valor padrão para o campo `data`.
    local: '', // Local do evento (inicialmente vazio).
    publicoEsperado: 1, // Público esperado inicial (valor mínimo padrão de 1).
    imagem: '', // URL ou caminho da imagem representativa do evento (inicialmente vazio).
    imagemBackground: '' // URL ou caminho da imagem de fundo do evento (inicialmente vazio).
  }
}
/*
Cenários de uso:
Formulários: Serve como ponto de partida para preencher
campos de um evento em uma interface de criação.
Mock de dados: Pode ser usado para testes ou cenários
onde valores padrão são suficientes para simular um evento.
Inicialização: Garante que nenhum campo seja undefined,
evitando problemas em validações ou renderizações iniciais.
*/
