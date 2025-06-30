//➡️ Link е като бутон, но изглежда като текстов линк, който не презарежда страницата.
//С него минаваме между страници много бързо, без да чакаме.
import { Link } from "react-router-dom";
import "../css/Navbar.css";
//➡️ Внасяме стиловете – за да изглежда менюто красиво (цвят, разположение и т.н.)

//➡️ Това е нашето меню.
//➡️ Създаваме <nav> – това е HTML елемент за навигация (меню).
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
        {/*➡️ Показваме заглавието „Movie App“, и ако го цъкнеш – те връща на началната страница (/). */}
      </div>

      {/* ➡️ Това са два бутона/връзки: */}
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
//➡️ Казваме: това меню вече може да се използва в други файлове.
