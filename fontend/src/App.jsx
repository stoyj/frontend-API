//Правим малко уеб приложение за филми. То има две страници:
//Начало“ (с всички филми)
//Любими“ (филмите, които ти харесваш)
//Има меню, за да щракаш между тези страници.
import "./css/App.css";
//➡️ Това казва: "вземи стиловете от App.css, за да направиш нещата красиви" – като обличане на сайта.
import Favorite from "./pages/Favorites";
import Home from "./pages/Home";
////➡️ Това са две страници:
import { Routes, Route } from "react-router-dom";
//🧭 Смяна на страници (пътища)
import { MovieProvider } from "./contexts/MovieContext";
//➡️ Това е кутия, която пази: всички филми, любимите филми, и ги споделя с цялото приложение.
import NavBar from "./components/NavBar";
//➡️ Това е горното меню, с бутони като „Начало“ и „Любими“.

//🏗️ Какво прави функцията App()
function App() {
  return (
    //🧺 <MovieProvider> – Опаковаме всичко с "торбичка", която пази филмите.
    <MovieProvider>
      <NavBar />
      {/*🍔<NavBar /> – Показваме менюто. */}
      <main className="main-content">
        {/*📦<main> – Това е основната част на екрана (тялото). */}
        <Routes>
          {/*📜<Routes> – Гледаме адреса */}
          <Route path="/" element={<Home />}></Route>
          {/*Ако си на /, показваме началната страница: <Home /> */}
          <Route path="/favorites" element={<Favorite />}></Route>
          {/*Ако си на /favorites, показваме любимите: <Favorite /> */}
        </Routes>
      </main>

      <p></p>
    </MovieProvider>
  );
}

export default App;
//➡️ export казва: Export приложението, за да го ползва.
