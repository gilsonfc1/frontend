import { useState, useEffect } from "react";

function Dashboard() {

  const [clientes, setClientes] = useState(0);
  const [entradas, setEntradas] = useState(0);
  const [saidas, setSaidas] = useState(0);


  useEffect(() => {

    const listaClientes = JSON.parse(
      localStorage.getItem("clientes") || "[]"
    );

    setClientes(listaClientes.length);


    const movimentos = JSON.parse(
      localStorage.getItem("financeiro") || "[]"
    );


    const totalEntradas = movimentos
      .filter(item => item.tipo === "entrada")
      .reduce(
        (total, item) => total + Number(item.valor),
        0
      );


    const totalSaidas = movimentos
      .filter(item => item.tipo === "saida")
      .reduce(
        (total, item) => total + Number(item.valor),
        0
      );


    setEntradas(totalEntradas);
    setSaidas(totalSaidas);


  }, []);



  return (

    <div>

      <h1>Olá, Gilson 👋</h1>

      <p>
        Controle seu negócio usando inteligência artificial.
      </p>


      <div
        style={{
          display:"flex",
          gap:"20px",
          marginTop:"30px"
        }}
      >


        <Card
          titulo="👥 Clientes"
          valor={clientes}
        />


        <Card
          titulo="💰 Faturamento"
          valor={`R$ ${entradas.toFixed(2)}`}
        />


        <Card
          titulo="📉 Despesas"
          valor={`R$ ${saidas.toFixed(2)}`}
        />


        <Card
          titulo="💵 Saldo"
          valor={`R$ ${(entradas-saidas).toFixed(2)}`}
        />


      </div>


    </div>

  );

}



function Card({titulo, valor}) {

  return (

    <div
      style={{
        background:"white",
        padding:"25px",
        borderRadius:"12px",
        width:"200px",
        boxShadow:"0 2px 8px #ddd"
      }}
    >

      <h3>{titulo}</h3>

      <h2>{valor}</h2>

    </div>

  );

}


export default Dashboard;