import { useEffect, useState } from "react";

function Dashboard() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const dados = JSON.parse(
      localStorage.getItem("clientes") || "[]"
    );

    setClientes(dados);
  }, []);


  return (
    <div>

      <h1>📊 Dashboard NegócioAI</h1>

      <p>
        Visão geral do seu negócio.
      </p>


      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        >
          <h2>👥 Clientes</h2>

          <h1>{clientes.length}</h1>

          <p>Cadastrados</p>

        </div>


        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        >
          <h2>💰 Financeiro</h2>

          <h1>R$ 0</h1>

          <p>Controle financeiro</p>

        </div>


        <div
          style={{
            background: "white",
            padding: "20px",
            width: "220px",
            borderRadius: "10px",
            border: "1px solid #ddd"
          }}
        >
          <h2>📅 Agenda</h2>

          <h1>0</h1>

          <p>Compromissos</p>

        </div>


      </div>

    </div>
  );
}

export default Dashboard;