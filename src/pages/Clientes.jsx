import { useState } from "react";

function Clientes() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const [clientes, setClientes] = useState(() => {
    const dadosSalvos = localStorage.getItem("clientes");

    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });


  function cadastrarCliente() {

    if (nome === "") {
      return;
    }


    const novoCliente = {
      nome,
      telefone
    };


    const novaLista = [
      ...clientes,
      novoCliente
    ];


    setClientes(novaLista);


    localStorage.setItem(
      "clientes",
      JSON.stringify(novaLista)
    );


    setNome("");
    setTelefone("");

  }


  function excluirCliente(index) {

    const novaLista = clientes.filter(
      (_, i) => i !== index
    );


    setClientes(novaLista);


    localStorage.setItem(
      "clientes",
      JSON.stringify(novaLista)
    );

  }



  return (

    <div>

      <h1>👥 Clientes</h1>


      <div className="card">

        <h3>Novo cliente</h3>


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


        <button onClick={cadastrarCliente}>
          Cadastrar cliente
        </button>

      </div>



      <h2>Lista de clientes</h2>


      {clientes.map((cliente, index) => (

        <div className="card" key={index}>

          <h3>{cliente.nome}</h3>

          <p>
            📞 {cliente.telefone}
          </p>


          <button
            onClick={() => excluirCliente(index)}
          >
            Excluir
          </button>


        </div>

      ))}


    </div>

  );

}


export default Clientes;