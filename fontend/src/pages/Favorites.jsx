//📦 Импортираме нужните неща:
import "../css/Favorites.css";
//Favorites.css	За стил на страницата с любимите

import { useMovieContext } from "../contexts/MovieContext";
//useMovieContext()	Вземаме списъка с любимите от кутия

import MovieCard from "../components/MovieCard";
//MovieCard компонент	За да покажем всеки филм красиво като карта (картичка)

//🧠 Какво става вътре в компонента Favorites()
function Favorites() {
  const { favorites } = useMovieContext();
  //🎁 Тук взимаме любимите филми от контекста (кутията с любими).
  //Сега вече можем да ги ползваме – примерно да ги покажем на екрана.

  console.log(favorites);
  //🛠️ Това просто пише списъка в конзолата, за да можем да го видим като разработчици.

  //🧐 Проверка дали има любими филми:
  //📏 Ако списъкът не е празен (има поне 1 филм), тогава ще покажем любимите филми. Иначе ще покажем празно съобщение.
  if (favorites.length) {
    return (
      ////✅ Ако има любими филми:
      <div className="favorites">
        {/* Показваме заглавие „Your Favorites */}
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {/* После правим мрежа с филми (movies-grid) */}
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
            //За всеки филм в списъка favorites, показваме <MovieCard movie={movie} />
            //🃏 Това е една картичка с постер, име и дата.
          ))}
        </div>
      </div>
    );
  }

  //❌ Ако няма любими филми:
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will appear here!</p>
    </div>
    //📭 Показваме съобщение, че още няма добавени любими филми.
  );
}

export default Favorites;
