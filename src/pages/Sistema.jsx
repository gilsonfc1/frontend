import { useState } from "react";

import Dashboard from "./Dashboard";
import Clientes from "./Clientes";
import Agenda from "./Agenda";
import Financeiro from "./Financeiro";

import Layout from "../components/Layout";


function Sistema({ sair }) {


  const [pagina, setPagina] = useState("dashboard");


  const usuario = JSON.parse(
    localStorage.getItem("usuarioLogado")
  );



  const menus = [

    {
      id: "dashboard",
      nome: "📊 Painel de controle"
    },

    {
      id: "clientes",
      nome: "👥 Clientes"
    },

    {
      id: "agenda",
      nome: "📅 Agenda"
    },

    {
      id: "financeiro",
      nome: "💰 Financeiro"
    }

  ];



  function renderPagina() {


    if (pagina === "dashboard") {
      return <Dashboard />;
    }


    if (pagina === "clientes") {
      return <Clientes />;
    }


    if (pagina === "agenda") {
      return <Agenda />;
    }


    if (pagina === "financeiro") {
      return <Financeiro />;
    }


  }



  return (

    <Layout

      menus={menus}

      pagina={pagina}

      setPagina={setPagina}

      sair={sair}

      usuario={usuario}

    >

      {renderPagina()}


    </Layout>

  );


}


export default Sistema;