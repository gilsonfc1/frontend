function Login() {
  return (
    <div>
      <h1>NegócioAI</h1>

      <h2>Entrar no sistema</h2>

      <input 
        type="email" 
        placeholder="Seu e-mail"
      />

      <br />

      <input 
        type="password" 
        placeholder="Sua senha"
      />

      <br />

      <button>
        Entrar
      </button>
    </div>
  );
}

export default Login;