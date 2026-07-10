import { useState } from "react";

import Login from "./pages/Login";
import Sistema from "./pages/Sistema";


function App() {


  const [logado, setLogado] = useState(() => {

    const usuario = localStorage.getItem(
      "usuarioLogado"
    );

    return usuario ? true : false;

  });



  function entrar() {

    setLogado(true);

  }



  if (!logado) {

    return (

      <Login
        entrar={entrar}
      />

    );

  }



  return (

    <Sistema />

  );


}


export default App;
