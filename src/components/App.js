import '../styles/App.css';
function App() {
  return (
    <div>
      <header>
        <nav className="header__menu-bars">
          <i className="fas fa-bars header__menu-bars-icon"></i> 
        </nav>
        <nav>
          <ul>
            <li>Ver todo</li>
            <li>+ Info</li>
            <li>Contacto</li>
            <li>
              <i class="fa-solid fa-cart-arrow-down"></i>
            </li>
          </ul>
        </nav>

      </header>
      <main>
        {/* Buscador por autor
        Buscador por estilo */}
      </main>
      <footer></footer>
    </div>
  );
}
export default App;

