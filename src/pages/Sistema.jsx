import { useState } from "react";

import Dashboard from "./Dashboard";
import Clientes from "./Clientes";
import Agenda from "./Agenda";
import Financeiro from "./Financeiro";


function Sistema() {

  const [pagina, setPagina] = useState("dashboard");


  function classeBotao(nome) {
    return pagina === nome ? "menu-ativo" : "";
  }


  return (

    <div className="layout">


      <aside className="sidebar">


        <h2>NegócioAI</h2>


        <button
          className={classeBotao("dashboard")}
          onClick={() => setPagina("dashboard")}
        >
          🏠 Painel de controle
        </button>


        <button
          className={classeBotao("clientes")}
          onClick={() => setPagina("clientes")}
        >
          👥 Clientes
        </button>


        <button
          className={classeBotao("agenda")}
          onClick={() => setPagina("agenda")}
        >
          📅 Agenda
        </button>


        <button
          className={classeBotao("financeiro")}
          onClick={() => setPagina("financeiro")}
        >
          💰 Financeiro
        </button>


      </aside>



      <main className="content">


        {pagina === "dashboard" && <Dashboard />}


        {pagina === "clientes" && <Clientes />}


        {pagina === "agenda" && <Agenda />}


        {pagina === "financeiro" && <Financeiro />}


      </main>


    </div>

  );

}


export default Sistema;