function Dashboard() {
  const clientes =
    JSON.parse(localStorage.getItem("clientes")) || [];

  const agendamentos =
    JSON.parse(localStorage.getItem("agendamentos")) || [];

  const lancamentos =
    JSON.parse(localStorage.getItem("lancamentos")) || [];

  const entradas = lancamentos
    .filter((item) => item.tipo === "entrada")
    .reduce((total, item) => total + Number(item.valor), 0);

  const saidas = lancamentos
    .filter((item) => item.tipo === "saida")
    .reduce((total, item) => total + Number(item.valor), 0);

  const saldo = entradas - saidas;

  const dataHoje = new Date().toISOString().split("T")[0];

  const agendaHoje = agendamentos.filter(
    (item) => item.data === dataHoje
  );

  const ultimosClientes = [...clientes].slice(-5).reverse();

  function moeda(valor) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div>
      <h1>📊 Dashboard</h1>

      <p style={{ marginBottom: "25px", color: "#6b7280" }}>
        Gestão inteligente do seu negócio
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div className="card">
          <h3>👥 Clientes</h3>
          <strong>{clientes.length}</strong>
          <p>Total de clientes cadastrados</p>
        </div>

        <div className="card">
          <h3>📅 Agenda de Hoje</h3>
          <strong>{agendaHoje.length}</strong>
          <p>Compromissos para hoje</p>
        </div>

        <div className="card">
          <h3>🟢 Entradas</h3>
          <strong>{moeda(entradas)}</strong>
          <p>Total recebido</p>
        </div>

        <div className="card">
          <h3>🔴 Saídas</h3>
          <strong>{moeda(saidas)}</strong>
          <p>Total de despesas</p>
        </div>

        <div className="card">
          <h3>💰 Saldo</h3>
          <strong>{moeda(saldo)}</strong>
          <p>Resultado financeiro</p>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "20px",
        }}
      >
        <div className="card">
          <h2>📅 Próximos Agendamentos</h2>

          {agendamentos.length === 0 ? (
            <p>Nenhum agendamento cadastrado.</p>
          ) : (
            agendamentos
              .slice(-5)
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <strong>{item.cliente}</strong>

                  <br />

                  {item.data} às {item.horario}
                </div>
              ))
          )}
        </div>

        <div className="card">
          <h2>👥 Últimos Clientes</h2>

          {ultimosClientes.length === 0 ? (
            <p>Nenhum cliente cadastrado.</p>
          ) : (
            ultimosClientes.map((cliente, index) => (
              <div
                key={index}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #eee",
                }}
              >
                {cliente.nome}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;