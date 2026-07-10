function Sidebar({ menus, pagina, setPagina, sair }) {
  return (
    <aside className="sidebar">

      <div className="logo">
        <h1>NegócioAI</h1>
      </div>

      <nav>

        {menus.map((menu) => (
          <button
            key={menu.id}
            className={
              pagina === menu.id
                ? "menu-ativo"
                : ""
            }
            onClick={() => setPagina(menu.id)}
          >
            {menu.nome}
          </button>
        ))}

        <button onClick={sair}>
          🚪 Sair
        </button>

      </nav>

    </aside>
  );
}

export default Sidebar;