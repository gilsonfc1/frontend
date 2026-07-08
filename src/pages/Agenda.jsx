import { useState } from "react";

function Agenda() {

  const [cliente, setCliente] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [servico, setServico] = useState("");

  const [agenda, setAgenda] = useState(() => {
    const dados = localStorage.getItem("agenda");
    return dados ? JSON.parse(dados) : [];
  });


  function adicionarAgendamento() {

    if (!cliente || !data || !horario) {
      return;
    }


    const novoAgendamento = {
      cliente,
      data,
      horario,
      servico
    };


    const novaLista = [
      ...agenda,
      novoAgendamento
    ];


    setAgenda(novaLista);


    localStorage.setItem(
      "agenda",
      JSON.stringify(novaLista)
    );


    setCliente("");
    setData("");
    setHorario("");
    setServico("");

  }


  function excluirAgendamento(index) {

    const novaLista = agenda.filter(
      (_, i) => i !== index
    );

    setAgenda(novaLista);

    localStorage.setItem(
      "agenda",
      JSON.stringify(novaLista)
    );

  }


  return (

    <div>

      <h1>📅 Agenda</h1>


      <input
        placeholder="Nome do cliente"
        value={cliente}
        onChange={(e)=>setCliente(e.target.value)}
      />


      <br />


      <input
        type="date"
        value={data}
        onChange={(e)=>setData(e.target.value)}
      />


      <br />


      <input
        type="time"
        value={horario}
        onChange={(e)=>setHorario(e.target.value)}
      />


      <br />


      <input
        placeholder="Serviço"
        value={servico}
        onChange={(e)=>setServico(e.target.value)}
      />


      <br />


      <button onClick={adicionarAgendamento}>
        Adicionar Agendamento
      </button>


      <h2>
        Próximos compromissos
      </h2>


      {agenda.map((item,index)=>(

        <div
          key={index}
          style={{
            background:"white",
            padding:"15px",
            marginTop:"10px",
            borderRadius:"8px"
          }}
        >

          <strong>
            👤 {item.cliente}
          </strong>

          <p>
            📅 {item.data}
          </p>

          <p>
            ⏰ {item.horario}
          </p>

          <p>
            🔧 {item.servico}
          </p>


          <button
            onClick={()=>excluirAgendamento(index)}
          >
            Excluir
          </button>


        </div>

      ))}


    </div>

  );

}


export default Agenda;