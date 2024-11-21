
export default class Data {
  // Método para formatar a data
  static formatar(data: Date): string {
    const pad = (n: number) => n.toString().padStart(2, '0');
    const d = data ?? new Date();
    const ano = d.getFullYear();
    const mes = pad(d.getMonth() + 1);  // Mês começa do 0, então soma 1
    const dia = pad(d.getDate());
    const hora = pad(d.getHours());
    const minuto = pad(d.getMinutes());

    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
  }

  // Método para desformatar a data de string para Date
  static desformatar(data: string): Date {
    // Verifica se a string está no formato esperado (ex: 2024-11-20T16:46)
    const partesData = data.split('T');
    if (partesData.length !== 2) {
      throw new Error('Formato de data inválido');
    }

    const [ano, mes, dia] = partesData[0].split('-').map(Number);
    const [hora, minuto] = partesData[1].split(':').map(Number);

    // Retorna a data com o mês ajustado (mes - 1, pois o mês começa em 0)
    return new Date(ano, mes - 1, dia, hora, minuto);
  }
}

// Exemplo de uso correto
console.log(Data.desformatar("2024-11-20T16:46"));
