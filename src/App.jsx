import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Clientes from "./pages/Clientes";
function App() {
  const [pagina, setPagina] = useState("dashboard");
  return (
    <div style={{
      display:"flex",
      height:"100vh",
      fontFamily:"Arial"
    }}>

      <aside style={{
        width:"240px",
        background:"#111827",
        color:"white",
        padding:"25px"
      }}>

        <h2>🚀 NegócioAI</h2>

        <hr />
<button style={{
  background:"transparent",
  color:"white",
  border:"none",
  padding:"10px",
  width:"100%",
  textAlign:"left",
  fontSize:"16px",
  cursor:"pointer"
}}>📊 Dashboard</button>

<button style={{
  background:"transparent",
  color:"white",
  border:"none",
  padding:"10px",
  width:"100%",
  textAlign:"left",
  fontSize:"16px",
  cursor:"pointer"
}} onClick={() => setPagina("clientes")}>👥 Clientes</button>

<button style={{
  background:"transparent",
  color:"white",
  border:"none",
  padding:"10px",
  width:"100%",
  textAlign:"left",
  fontSize:"16px",
  cursor:"pointer"
}}>📅 Agenda</button>

<button style={{
  background:"transparent",
  color:"white",
  border:"none",
  padding:"10px",
  width:"100%",
  textAlign:"left",
  fontSize:"16px",
  cursor:"pointer"
}}>💰 Financeiro</button>

<button style={{
  background:"transparent",
  color:"white",
  border:"none",
  padding:"10px",
  width:"100%",
  textAlign:"left",
  fontSize:"16px",
  cursor:"pointer"
}}>🤖 Assistente IA</button>

      </aside>
      <main style={{
  flex: 1,
  padding: "30px",
  background: "#f3f4f6"
}}>
  <Dashboard />
</main>


      <main style={{
        flex:1,
        background:"#f3f4f6",
        padding:"35px"
      }}>
{pagina === "clientes" && <Clientes />}



        <h1>Olá, Gilson 👋</h1>

        <p>
          Controle seu negócio usando inteligência artificial.
        </p>


        <div style={{
          display:"flex",
          gap:"20px",
          marginTop:"30px"
        }}>


          <Card 
          titulo="Clientes"
          valor="0"
          />


          <Card 
          titulo="Agenda Hoje"
          valor="0"
          />


          <Card 
          titulo="Faturamento"
          valor="R$ 0"
          />


        </div>


        <div style={{
          marginTop:"30px",
          background:"white",
          padding:"25px",
          borderRadius:"12px"
        }}>

          <h2>🤖 Assistente IA</h2>

          <p>
            Pergunte qualquer coisa sobre seu negócio.
          </p>

          <input
          placeholder="Digite sua pergunta..."
          style={{
            width:"80%",
            padding:"12px",
            borderRadius:"8px",
            border:"1px solid #ddd"
          }}
          />

        </div>


      </main>

    </div>
  )
}


function Card({titulo, valor}){

return(

<div style={{
background:"white",
padding:"25px",
borderRadius:"12px",
width:"200px",
boxShadow:"0 2px 8px #ddd"
}}>

<h3>{titulo}</h3>

<h1>{valor}</h1>

</div>

)

}


export default App