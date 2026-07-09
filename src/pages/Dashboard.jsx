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


  const saldo = lancamentos.reduce((total, item) => {

    if (item.tipo === "entrada") {
      return total + item.valor;
    }

    return total - item.valor;

  }, 0);


  return (
    <div>

      <h1>Dashboard</h1>

      <h2>Resumo do NegócioAI</h2>


      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >


        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
          }}
        >
          <h3>👥 Clientes</h3>
          <h1>{clientes.length}</h1>
        </div>


        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
          }}
        >
          <h3>📅 Agenda</h3>
          <h1>{agendamentos.length}</h1>
        </div>


        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "10px",
            width: "200px"
          }}
        >
          <h3>💰 Saldo</h3>
          <h1>R$ {saldo}</h1>
        </div>


      </div>


    </div>
  );
}

export default Dashboard;