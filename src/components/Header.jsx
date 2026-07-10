function Header({ usuario }) {
  return (
    <header className="header">

      <div>
        <h2>
          NegócioAI
        </h2>

        <p>
          Gestão inteligente do seu negócio
        </p>
      </div>


      {usuario && (

        <div className="header-usuario">

          <strong>
            {usuario.nome}
          </strong>

          <small>
            {usuario.email}
          </small>

        </div>

      )}


    </header>
  );
}

export default Header;