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
          gap: "20px",
          flexWrap: "wrap"
        }}
      >


        <div className="card">
          <h3>👥 Clientes</h3>
          <strong>{clientes.length}</strong>
        </div>


        <div className="card">
          <h3>📅 Agenda</h3>
          <strong>{agendamentos.length}</strong>
        </div>


        <div className="card">
          <h3>💰 Saldo</h3>
          <strong>R$ {saldo}</strong>
        </div>


      </div>


    </div>
  );
}

export default Dashboard;