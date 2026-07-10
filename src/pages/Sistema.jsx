import { useState } from "react";

import Dashboard from "./Dashboard";
import Clientes from "./Clientes";
import Agenda from "./Agenda";
import Financeiro from "./Financeiro";


function Sistema({ sair }) {


  const [pagina, setPagina] = useState("dashboard");



  const menus = [

    {
      id: "dashboard",
      nome: "🏠 Painel de controle"
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

    <div className="layout">


      <aside className="sidebar">


        <h2>
          NegócioAI
        </h2>



        <nav>


          {menus.map((menu) => (


            <button

              key={menu.id}

              className={
                pagina === menu.id
                  ? "menu-ativo"
                  : ""
              }

              onClick={() =>
                setPagina(menu.id)
              }

            >

              {menu.nome}

            </button>


          ))}



          <button

            onClick={sair}

          >

            🚪 Sair

          </button>



        </nav>



      </aside>




      <main className="content">


        {renderPagina()}


      </main>



    </div>

  );


}


export default Sistema;