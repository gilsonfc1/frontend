function Dashboard() {


  const clientes = JSON.parse(

    localStorage.getItem("clientes")

  ) || [];



  const agendamentos = JSON.parse(

    localStorage.getItem("agendamentos")

  ) || [];



  const lancamentos = JSON.parse(

    localStorage.getItem("lancamentos")

  ) || [];




  const entradas = lancamentos.reduce(

    (total, item) => {

      if (item.tipo === "entrada") {

        return total + item.valor;

      }

      return total;

    },

    0

  );





  const saidas = lancamentos.reduce(

    (total, item) => {

      if (item.tipo === "saida") {

        return total + item.valor;

      }

      return total;

    },

    0

  );





  const saldo = entradas - saidas;




  return (

    <div>


      <h1>
        📊 Dashboard
      </h1>



      <h2>
        Resumo do NegócioAI
      </h2>




      <div

        style={{

          display: "flex",

          gap: "20px",

          flexWrap: "wrap"

        }}

      >



        <div className="card">

          <h3>
            👥 Clientes
          </h3>

          <strong>
            {clientes.length}
          </strong>

        </div>





        <div className="card">

          <h3>
            📅 Agendamentos
          </h3>

          <strong>
            {agendamentos.length}
          </strong>

        </div>





        <div className="card">

          <h3>
            🟢 Entradas
          </h3>

          <strong>

            R$ {entradas.toFixed(2)}

          </strong>

        </div>





        <div className="card">

          <h3>
            🔴 Saídas
          </h3>

          <strong>

            R$ {saidas.toFixed(2)}

          </strong>

        </div>





        <div className="card">

          <h3>
            💰 Saldo atual
          </h3>

          <strong>

            R$ {saldo.toFixed(2)}

          </strong>

        </div>



      </div>



    </div>

  );


}


export default Dashboard; 