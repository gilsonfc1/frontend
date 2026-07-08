import { useState } from "react";
function Dashboard() {
  return (
    <div>
      <h1>Dashboard NegócioAI</h1>
      <p>Visão geral do seu negócio.</p>
    </div>
  );
}
const clientes = JSON.parse(
localStorage.getItem("clientes") || "[]"
);


export default Dashboard;

