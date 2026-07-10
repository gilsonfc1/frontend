function Mensagem({ texto }) {

  if (!texto) {
    return null;
  }


  return (

    <div className="mensagem">

      {texto}

    </div>

  );

}


export default Mensagem;