//➡️ Внасяме стиловете – те казват как да изглежда картата на филма (цвят, размер, оформление).
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
//➡️ Това ни дава връзка с "кутията", която пази любимите филми.

//🧩 Функцията MovieCard({ movie })
function MovieCard({ movie }) {
  const { isFavorite, toggleFavorites } = useMovieContext();
  //Да проверим дали филмът е в любими (isFavorite)
  //Да го добавим/махнем от любими (toggleFavorites)

  // Това връща true или false за конкретния филм
  const favorite = isFavorite(movie.id);

  //🎬 Какво показваме на екрана:
  return (
    <div className="movie-card">
      {/* ➡️ Това е кутията на филма. */}
      <div className="movie-poster">
        {/* 🖼️ Снимката на филма: */}
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            //🤍 Бутон за „Любими“:
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={() => toggleFavorites(movie)}
          >
            🤍
          </button>
        </div>
      </div>

      {/*ℹ️ Заглавие и дата: */}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
