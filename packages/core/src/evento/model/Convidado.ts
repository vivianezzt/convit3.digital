export default interface Convidado {
  id: string
  nome: string
  email: string
  confirmado: boolean
  possuiAcompanhantes: boolean
  qtdeAcompanhantes: number
}
/* Define a interface Convidado, que descreve a estrutura de um objeto de convidado.
A propriedade 'id' é uma string que representa um identificador único para o convidado.
A propriedade 'nome' é uma string que representa o nome do convidado.
A propriedade 'email' é uma string que representa o email do convidado.
A propriedade 'confirmado' é um valor booleano que indica se o convidado confirmou presença.
A propriedade 'possuiAcompanhantes' é um valor booleano que indica se o convidado traz acompanhantes.
A propriedade 'qtdeAcompanhantes' é um número que representa a quantidade de acompanhantes do convidado.

Por que usar uma interface?
Tipo seguro: Ela garante que qualquer objeto do tipo Convidado tenha as propriedades corretamente tipadas,
o que ajuda a evitar erros de atribuição de valores inesperados.
Documentação implícita: A interface serve como uma documentação da estrutura do objeto.
Qualquer desenvolvedor que for trabalhar com esse objeto sabe exatamente quais propriedades e tipos ele deve ter.
Facilidade de manutenção: Caso a estrutura de dados precise ser modificada (por exemplo,
adicionando novas propriedades), você pode alterar a interface em um único lugar, e o TypeScript
ajudará a garantir que essas mudanças sejam refletidas em todo o código onde a interface for usada.
*/
