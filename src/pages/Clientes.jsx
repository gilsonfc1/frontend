import { useState } from "react";

function Clientes() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [busca, setBusca] = useState("");
  const [editando, setEditando] = useState(null);


  const [clientes, setClientes] = useState(() => {

    const dadosSalvos = localStorage.getItem("clientes");

    return dadosSalvos ? JSON.parse(dadosSalvos) : [];

  });



  function salvarClientes(lista) {

    setClientes(lista);

    localStorage.setItem(
      "clientes",
      JSON.stringify(lista)
    );

  }



  function cadastrarCliente() {

    if (nome === "") {
      return;
    }


    const novoCliente = {
      nome,
      telefone
    };


    salvarClientes([
      ...clientes,
      novoCliente
    ]);


    setNome("");
    setTelefone("");

  }



  function excluirCliente(index) {

    const confirmar = window.confirm(
      "Deseja excluir este cliente?"
    );


    if (!confirmar) {
      return;
    }


    const novaLista = clientes.filter(
      (_, i) => i !== index
    );


    salvarClientes(novaLista);

  }



  function editarCliente(index) {

    const cliente = clientes[index];


    setNome(cliente.nome);
    setTelefone(cliente.telefone);

    setEditando(index);

  }



  function atualizarCliente() {


    const novaLista = clientes.map(
      (cliente, index) => {

        if (index === editando) {

          return {
            nome,
            telefone
          };

        }

        return cliente;

      }
    );


    salvarClientes(novaLista);


    setNome("");
    setTelefone("");
    setEditando(null);

  }



  const clientesFiltrados = clientes.filter(
    (cliente) =>
      cliente.nome
      .toLowerCase()
      .includes(busca.toLowerCase())
  );



  return (

    <div>


      <h1>👥 Clientes</h1>


      <div className="card">


        <h3>
          {editando !== null
            ? "Editar cliente"
            : "Novo cliente"}
        </h3>


        <input
          placeholder="Nome do cliente"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />


        <br /><br />


        <input
          placeholder="Telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />


        <br /><br />


        {editando !== null ? (

          <button onClick={atualizarCliente}>
            Salvar alteração
          </button>

        ) : (

          <button onClick={cadastrarCliente}>
            Cadastrar cliente
          </button>

        )}


      </div>



      <h2>Buscar cliente</h2>


      <input
        placeholder="Digite o nome"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />



      <h2>Lista de clientes</h2>



      {clientesFiltrados.map((cliente, index) => (


        <div className="card" key={index}>


          <h3>
            {cliente.nome}
          </h3>


          <p>
            📞 {cliente.telefone}
          </p>


          <button
            onClick={() => editarCliente(index)}
          >
            ✏️ Editar
          </button>


          <button
            onClick={() => excluirCliente(index)}
          >
            🗑️ Excluir
          </button>


        </div>


      ))}


    </div>

  );

}


export default Clientes;