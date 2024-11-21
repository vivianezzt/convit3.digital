import { Evento, Convidado } from "@/core";
import InformacoesEventos from "./InformacoesEventos";
import AcessarViaQrCode from "./AcessarViaQrCode";
import Estatistica from "../shared/Estatistica";
import ListaConvidados from "./ListaConvidados";

export interface DashboardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}


export default function DashboardEvento(props: DashboardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEventos evento={props.evento} className="flex-1"/>
        <AcessarViaQrCode evento={props.evento}/>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatistica texto="Espectativa de convidados: "
        valor={props.evento.publicoEsperado}
        imagem="/icones/convidados.svg"
        />
        <Estatistica texto="Confirmações: "
        valor={props.presentes.length}
        imagem="/icones/confirmados.svg"
        />
        <Estatistica texto="Acompanhantes: "
        valor={props.totalGeral}
        imagem="/icones/acompanhantes.svg"
        />
      </div>
       <button className="botao azul self-end mt-12">
          <span>Atualizar lista de convidados</span>
        </button>
      <span className="flex py-2 text-xl font-bold text-white/80">Convidados que confirmaram <span className="text-green-600 ml-2">PRESENÇA</span>:</span>
      <ListaConvidados convidados={props.presentes}/>
      <span className="flex py-2 text-xl font-bold text-white/80">Convidados que confirmaram<span className="text-red-500 ml-2">AUSÊNCIA</span></span>
      <ListaConvidados convidados={props.ausentes}/>
    </div>
  );
}