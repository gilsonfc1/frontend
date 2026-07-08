import { useState } from "react";

function Clientes() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const [clientes, setClientes] = useState(() => {
    const dados = localStorage.getItem("clientes");
    return dados ? JSON.parse(dados) : [];
  });

  function salvarCliente() {
    if (!nome.trim()) return;

    const novoCliente = {
      nome,
      whatsapp,
      email,
    };

    const novaLista = [...clientes, novoCliente];

    setClientes(novaLista);

    localStorage.setItem(
      "clientes",
      JSON.stringify(novaLista)
    );

    setNome("");
    setWhatsapp("");
    setEmail("");
  }

  function editarCliente(cliente) {
    setNome(cliente.nome);
    setWhatsapp(cliente.whatsapp);
    setEmail(cliente.email);
  }

  function excluirCliente(index) {
    const novaLista = clientes.filter((_, i) => i !== index);

    setClientes(novaLista);

    localStorage.setItem(
      "clientes",
      JSON.stringify(novaLista)
    );
  }

  return (
    <div>
      <h1>👥 Clientes</h1>

      <div style={{ marginTop: "20px" }}>

        <input
          type="text"
          placeholder="Nome do cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "10px"
          }}
        />

        <br />

        <input
          type="text"
          placeholder="WhatsApp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "10px"
          }}
        />

        <br />

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: "10px",
            width: "300px",
            marginBottom: "20px"
          }}
        />

        <br />

        <button
          onClick={salvarCliente}
          style={{
            padding: "12px 20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Salvar Cliente
        </button>


        <div style={{ marginTop: "30px" }}>

          <h2>
            Clientes Cadastrados ({clientes.length})
          </h2>


          {clientes.map((cliente, index) => (

            <div
              key={index}
              style={{
                background: "white",
                padding: "15px",
                marginTop: "10px",
                borderRadius: "8px",
                border: "1px solid #ddd"
              }}
            >

              <strong>{cliente.nome}</strong>

              <p>📱 {cliente.whatsapp}</p>

              <p>📧 {cliente.email}</p>


              <button
                onClick={() => editarCliente(cliente)}
                style={{
                  background: "#16a34a",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "10px"
                }}
              >
                Editar
              </button>


              <button
                onClick={() => excluirCliente(index)}
                style={{
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Excluir
              </button>


            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default Clientes;