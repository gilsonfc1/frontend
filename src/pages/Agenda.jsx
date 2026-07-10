import { useState } from "react";
import Mensagem from "./Mensagem";

function Agenda() {

  const [cliente, setCliente] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [mensagem, setMensagem] = useState("");

  const [editando, setEditando] = useState(null);


  const [agendamentos, setAgendamentos] = useState(() => {

    const dadosSalvos = localStorage.getItem("agendamentos");

    return dadosSalvos
      ? JSON.parse(dadosSalvos)
      : [];

  });



  const clientes = JSON.parse(
    localStorage.getItem("clientes")
  ) || [];




  function salvarAgendamentos(lista) {

    setAgendamentos(lista);

    localStorage.setItem(
      "agendamentos",
      JSON.stringify(lista)
    );

  }





  function mostrarMensagem(texto) {

    setMensagem(texto);

    setTimeout(() => {

      setMensagem("");

    }, 3000);

  }






  function criarAgendamento() {


    if (
      cliente === "" ||
      data === "" ||
      horario === ""
    ) {

      mostrarMensagem(
        "Preencha todos os campos"
      );

      return;

    }



    const novoAgendamento = {

      cliente,
      data,
      horario

    };



    salvarAgendamentos([

      ...agendamentos,
      novoAgendamento

    ]);



    limparFormulario();


    mostrarMensagem(
      "Agendamento criado com sucesso!"
    );


  }






  function editarAgendamento(index) {


    const item = agendamentos[index];


    setCliente(item.cliente);
    setData(item.data);
    setHorario(item.horario);

    setEditando(index);


  }






  function atualizarAgendamento() {


    const novaLista = agendamentos.map(

      (item,index)=>{


        if(index === editando){

          return {

            cliente,
            data,
            horario

          };

        }


        return item;


      }

    );



    salvarAgendamentos(novaLista);


    limparFormulario();


    mostrarMensagem(
      "Agendamento atualizado com sucesso!"
    );


  }






  function excluirAgendamento(index) {


    const confirmar = window.confirm(
      "Deseja excluir este agendamento?"
    );


    if(!confirmar){

      return;

    }



    const novaLista = agendamentos.filter(

      (_,i)=> i !== index

    );



    salvarAgendamentos(novaLista);



    mostrarMensagem(
      "Agendamento removido com sucesso!"
    );


  }






  function limparFormulario(){

    setCliente("");
    setData("");
    setHorario("");
    setEditando(null);

  }






  return (

    <div>


      <h1>
        📅 Agenda
      </h1>



      <Mensagem texto={mensagem}/>





      <div className="card">


        <h3>

          {editando !== null
            ? "Editar agendamento"
            : "Novo agendamento"
          }

        </h3>





        <select

          value={cliente}

          onChange={(e)=>
            setCliente(e.target.value)
          }

        >

          <option value="">
            Selecione o cliente
          </option>


          {clientes.map((c,index)=>(

            <option
              key={index}
              value={c.nome}
            >

              {c.nome}

            </option>

          ))}


        </select>




        <br/><br/>




        <input

          type="date"

          value={data}

          onChange={(e)=>
            setData(e.target.value)
          }

        />



        <br/><br/>




        <input

          type="time"

          value={horario}

          onChange={(e)=>
            setHorario(e.target.value)
          }

        />



        <br/><br/>





        {editando !== null ? (

          <button onClick={atualizarAgendamento}>

            Salvar alteração

          </button>


        ) : (

          <button onClick={criarAgendamento}>

            Criar agendamento

          </button>

        )}



      </div>






      <h2>
        Compromissos
      </h2>





      {agendamentos.map((item,index)=>(


        <div

          className="card"

          key={index}

        >


          <h3>
            {item.cliente}
          </h3>



          <p>
            📅 {item.data}
          </p>



          <p>
            🕒 {item.horario}
          </p>





          <button

            onClick={()=>
              editarAgendamento(index)
            }

          >

            ✏️ Editar

          </button>





          <button

            onClick={()=>
              excluirAgendamento(index)
            }

          >

            🗑️ Excluir

          </button>



        </div>


      ))}




    </div>

  );

}


export default Agenda;