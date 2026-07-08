import { useState } from "react";

function Login({ entrar }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {

    if (!email || !senha) {
      alert("Preencha e-mail e senha.");
      return;
    }

    entrar();

  }

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#f3f4f6"
      }}
    >

      <div
        style={{
          width: "350px",
          background: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px #ccc"
        }}
      >

        <h1>🚀 NegócioAI</h1>

        <p>Faça login para continuar</p>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px"
          }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px"
          }}
        />

        <button
          onClick={fazerLogin}
          style={{
            width: "100%",
            padding: "12px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Entrar
        </button>

      </div>

    </div>

  );
}

export default Login;
