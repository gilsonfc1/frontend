import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";

function App() {

  const [pagina, setPagina] = useState("dashboard");

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial"
      }}
    >

      <aside
        style={{
          width: "240px",
          background: "#111827",
          color: "white",
          padding: "25px"
        }}
      >

        <h2>🚀 NegócioAI</h2>

        <hr />

        <button
          onClick={() => setPagina("dashboard")}
          style={estiloBotao}
        >
          📊 Dashboard
        </button>


        <button
          onClick={() => setPagina("clientes")}
          style={estiloBotao}
        >
          👥 Clientes
        </button>


        <button
          onClick={() => setPagina("agenda")}
          style={estiloBotao}
        >
          📅 Agenda
        </button>


        <button
          onClick={() => setPagina("financeiro")}
          style={estiloBotao}
        >
          💰 Financeiro
        </button>


        <button
          onClick={() => setPagina("ia")}
          style={estiloBotao}
        >
          🤖 Assistente IA
        </button>


      </aside>


      <main
        style={{
          flex: 1,
          padding: "35px",
          background: "#f3f4f6"
        }}
      >

        {pagina === "dashboard" && <Dashboard />}

        {pagina === "clientes" && <Clientes />}


        {pagina === "agenda" &&
          <h1>📅 Agenda em construção</h1>
        }


        {pagina === "financeiro" &&
          <h1>💰 Financeiro em construção</h1>
        }


        {pagina === "ia" &&
          <h1>🤖 Assistente IA em construção</h1>
        }


      </main>


    </div>
  );
}


const estiloBotao = {
  background: "transparent",
  color: "white",
  border: "none",
  padding: "12px",
  width: "100%",
  textAlign: "left",
  fontSize: "16px",
  cursor: "pointer"
};


export default App;