import { useState, useRef } from "react";
import Mensagem from "./Mensagem";

function Clientes() {

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [observacao, setObservacao] = useState("");

  const [busca, setBusca] = useState("");
  const [editando, setEditando] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const formularioRef = useRef(null);


  const [clientes, setClientes] = useState(() => {

    const dados = localStorage.getItem("clientes");

    return dados
      ? JSON.parse(dados)
      : [];

  });



  function salvarClientes(lista) {

    setClientes(lista);

    localStorage.setItem(
      "clientes",
      JSON.stringify(lista)
    );

  }



  function mostrarMensagem(texto) {

    setMensagem(texto);

    setTimeout(() => {

      setMensagem("");

    }, 3000);

  }



  function limparFormulario() {

    setNome("");
    setTelefone("");
    setEmail("");
    setObservacao("");
    setEditando(null);

  }



  function cadastrarCliente() {


    if (!nome.trim()) {

      mostrarMensagem(
        "Informe o nome do cliente"
      );

      return;

    }



    const novoCliente = {

      id: Date.now(),

      nome,

      telefone,

      email,

      observacao,

      criadoEm: new Date().toLocaleDateString()

    };



    salvarClientes([

      ...clientes,

      novoCliente

    ]);



    limparFormulario();


    mostrarMensagem(
      "Cliente cadastrado com sucesso!"
    );


  }



  function editarCliente(index) {


    const cliente = clientes[index];


    setNome(cliente.nome || "");

    setTelefone(cliente.telefone || "");

    setEmail(cliente.email || "");

    setObservacao(cliente.observacao || "");

    setEditando(index);



    setTimeout(() => {

      formularioRef.current.scrollIntoView({

        behavior: "smooth"

      });

    },100);


  }




  function atualizarCliente() {


    const listaAtualizada = clientes.map(

      (cliente,index)=>{


        if(index === editando){

          return {

            ...cliente,

            nome,

            telefone,

            email,

            observacao

          };

        }


        return cliente;

      }

    );



    salvarClientes(listaAtualizada);


    limparFormulario();


    mostrarMensagem(
      "Cliente atualizado com sucesso!"
    );


  }





  function excluirCliente(index) {


    const confirmar = window.confirm(

      "Deseja remover este cliente?"

    );


    if(!confirmar){

      return;

    }



    const novaLista = clientes.filter(

      (_,i)=> i !== index

    );



    salvarClientes(novaLista);



    mostrarMensagem(
      "Cliente removido!"
    );


  }




  const clientesFiltrados = clientes.filter(

    (cliente)=>

      cliente.nome

      .toLowerCase()

      .includes(

        busca.toLowerCase()

      )

  );



  return (

    <div>


      <h1>
        👥 Clientes
      </h1>


      <p>
        Total de clientes cadastrados: <strong>{clientes.length}</strong>
      </p>



      <Mensagem texto={mensagem}/>



      <div
        className="card"
        ref={formularioRef}
      >


        <h3>

          {editando !== null

          ? "Editar cliente"

          : "Novo cliente"

          }

        </h3>



        <input

          placeholder="Nome completo"

          value={nome}

          onChange={(e)=>setNome(e.target.value)}

        />



        <br/><br/>



        <input

          placeholder="Telefone / WhatsApp"

          value={telefone}

          onChange={(e)=>setTelefone(e.target.value)}

        />



        <br/><br/>



        <input

          placeholder="E-mail"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />



        <br/><br/>



        <input

          placeholder="Observações"

          value={observacao}

          onChange={(e)=>setObservacao(e.target.value)}

        />



        <br/><br/>



        {

        editando !== null ?


        <button onClick={atualizarCliente}>

          Salvar alteração

        </button>


        :


        <button onClick={cadastrarCliente}>

          Cadastrar cliente

        </button>


        }



      </div>




      <div className="card">


        <h3>
          🔎 Buscar clientes
        </h3>


        <input

          placeholder="Digite o nome"

          value={busca}

          onChange={(e)=>setBusca(e.target.value)}

        />


      </div>




      <h2>
        Lista de clientes
      </h2>




      {

      clientesFiltrados.map(

        (cliente,index)=>(


          <div

            className="card"

            key={cliente.id || index}

          >


            <h3>
              {cliente.nome}
            </h3>


            <p>
              📞 {cliente.telefone || "Não informado"}
            </p>


            <p>
              ✉️ {cliente.email || "Não informado"}
            </p>


            <p>
              📝 {cliente.observacao || "Sem observações"}
            </p>


            <small>
              Cadastro: {cliente.criadoEm || "Anterior"}
            </small>


            <br/><br/>


            <button

              onClick={()=>editarCliente(index)}

            >

              ✏️ Editar

            </button>



            <button

              onClick={()=>excluirCliente(index)}

            >

              🗑️ Excluir

            </button>


          </div>


        )

      )

      }



    </div>

  );

}


export default Clientes;