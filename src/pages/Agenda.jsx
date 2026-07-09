import { useState } from "react";

function Agenda() {

  const [cliente, setCliente] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");

  const [agendamentos, setAgendamentos] = useState(() => {
    const dadosSalvos = localStorage.getItem("agendamentos");

    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  const clientes = JSON.parse(
    localStorage.getItem("clientes")
  ) || [];


  function criarAgendamento() {

    if (cliente === "" || data === "" || horario === "") {
      return;
    }

    const novoAgendamento = {
      cliente,
      data,
      horario
    };

    const novaLista = [
      ...agendamentos,
      novoAgendamento
    ];

    setAgendamentos(novaLista);

    localStorage.setItem(
      "agendamentos",
      JSON.stringify(novaLista)
    );

    setCliente("");
    setData("");
    setHorario("");

  }


  return (

    <div>

      <h1>📅 Agenda</h1>


      <div className="card">

        <h3>Novo agendamento</h3>

        <select
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
        >

          <option value="">
            Selecione o cliente
          </option>

          {clientes.map((c, index) => (
            <option
              key={index}
              value={c.nome}
            >
              {c.nome}
            </option>
          ))}

        </select>

        <br /><br />

        <input
          type="date"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />

        <br /><br />

        <input
          type="time"
          value={horario}
          onChange={(e) => setHorario(e.target.value)}
        />

        <br /><br />

        <button
          onClick={criarAgendamento}
        >
          Criar agendamento
        </button>

      </div>


      <h2>Compromissos</h2>


      {agendamentos.map((item, index) => (

        <div
          className="card"
          key={index}
        >

          <h3>{item.cliente}</h3>

          <p>📅 {item.data}</p>

          <p>🕒 {item.horario}</p>

        </div>

      ))}

    </div>

  );

}

export default Agenda;