import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({
  menus,
  pagina,
  setPagina,
  sair,
  usuario,
  children
}) {

  return (
    <div className="layout">

      <Sidebar
        menus={menus}
        pagina={pagina}
        setPagina={setPagina}
        sair={sair}
      />

      <div className="area-principal">

        <Header
          usuario={usuario}
        />

        <main className="conteudo">
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;