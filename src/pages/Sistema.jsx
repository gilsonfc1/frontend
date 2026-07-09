import { useState } from "react";

import Dashboard from "./Dashboard";
import Clientes from "./Clientes";
import Agenda from "./Agenda";
import Financeiro from "./Financeiro";

function Sistema() {

  const [pagina, setPagina] = useState("dashboard");

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh"
      }}
    >

      <aside
        style={{
          width: "220px",
          background: "#111827",
          color: "white",
          padding: "20px"
        }}
      >

        <h2>NegócioAI</h2>

        <button onClick={() => setPagina("dashboard")}>
          🏠 Painel de controle
        </button>

        <br /><br />

        <button onClick={() => setPagina("clientes")}>
          👥 Clientes
        </button>

        <br /><br />

        <button onClick={() => setPagina("agenda")}>
          📅 Agenda
        </button>
<br /><br />

<button onClick={() => setPagina("financeiro")}>
  💰 Financeiro
</button>
      </aside>


      <main
        style={{
          flex: 1,
          padding: "30px"
        }}
      >

        {pagina === "dashboard" && <Dashboard />}

        {pagina === "clientes" && <Clientes />}

        {pagina === "agenda" && <Agenda />}

    
{pagina === "financeiro" && <Financeiro />}
</main>
    </div>
  );
}

export default Sistema;