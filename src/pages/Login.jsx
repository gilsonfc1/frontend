import { useState } from "react";


function Login({ entrar }) {


  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");



  function fazerLogin() {


    if (email === "" || senha === "") {

      setMensagem(
        "Preencha e-mail e senha"
      );

      return;

    }



    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify({
        email
      })
    );



    entrar();


  }



  return (

    <div>


      <h1>
        NegócioAI
      </h1>


      <h2>
        Entrar no sistema
      </h2>



      {mensagem && (

        <p>
          {mensagem}
        </p>

      )}



      <input

        type="email"

        placeholder="Seu e-mail"

        value={email}

        onChange={(e) =>
          setEmail(e.target.value)
        }

      />



      <br /><br />



      <input

        type="password"

        placeholder="Sua senha"

        value={senha}

        onChange={(e) =>
          setSenha(e.target.value)
        }

      />



      <br /><br />



      <button

        onClick={fazerLogin}

      >

        Entrar

      </button>



    </div>

  );

}


export default Login;