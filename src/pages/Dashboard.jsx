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



  const entradas = lancamentos
    .filter(item => item.tipo === "entrada")
    .reduce(
      (total, item) => total + item.valor,
      0
    );



  const saidas = lancamentos
    .filter(item => item.tipo === "saida")
    .reduce(
      (total, item) => total + item.valor,
      0
    );



  const saldo = entradas - saidas;



  const ultimosLancamentos = lancamentos.slice(-5).reverse();



  return (

    <div>


      <h1>📊 Dashboard</h1>


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

          <h3>👥 Clientes</h3>

          <strong>
            {clientes.length}
          </strong>

        </div>




        <div className="card">

          <h3>📅 Agenda</h3>

          <strong>
            {agendamentos.length}
          </strong>

        </div>




        <div className="card">

          <h3>🟢 Entradas</h3>

          <strong>
            R$ {entradas.toFixed(2)}
          </strong>

        </div>




        <div className="card">

          <h3>🔴 Saídas</h3>

          <strong>
            R$ {saidas.toFixed(2)}
          </strong>

        </div>




        <div className="card">

          <h3>💰 Saldo</h3>

          <strong>
            R$ {saldo.toFixed(2)}
          </strong>

        </div>



      </div>



      <h2>
        Últimos lançamentos
      </h2>




      {ultimosLancamentos.map(
        (item, index) => (

          <div
            className="card"
            key={index}
          >

            <h3>
              {item.descricao}
            </h3>


            <p>
              {item.tipo === "entrada"
                ? "🟢 Entrada"
                : "🔴 Saída"
              }
            </p>


            <p>
              R$ {item.valor.toFixed(2)}
            </p>


          </div>

        )

      )}



    </div>

  );

}


export default Dashboard;