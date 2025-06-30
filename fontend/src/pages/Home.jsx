//🧠 Импортираме неща:
import MovieCard from "../components/MovieCard";
//MovieCard	Показва филм красиво като картичка 🃏

import "../css/Home.css";
//Home.css	Прави тази страница красива 🎨

import useMovis from "../hooks/useMovis";
//useMovis (хук)	Специална "магия", която зарежда филми и търси 🎩

import { getPopularMovies } from "../services/api";
//getPopularMovies()	Взима най-популярните филми от интернет 🌍🎥

//🏠 Функцията Home
//Това е компонент – една страничка. Той ще покаже неща на екрана.
function Home() {
  //🎣 Викаме useMovis():
  const { setSearchQuery, movies, error, loading, handleSearch, searchQuery } =
    useMovis(getPopularMovies);
  //setSearchQuery()	Променя търсената дума ✏️
  //movies	Списък с филмите 🎞️
  //error	Ако има грешка – съобщение ❌
  //loading	Дали зареждаме нещо в момента ⏳
  //handleSearch()	Казва какво да правим, когато натиснем бутона “Search” 🔍
  //searchQuery	Това, което потребителят пише в търсачката 🔎

  //🔍 Формата за търсене:
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        {/*➡️ Това е поленцето и бутона за търсене
        Когато пишеш нещо, то се записва в searchQuery.
        Когато натиснеш бутона – handleSearch ще се изпълни. */}
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/*❌ Ако има грешка: */}
      {error && <div className="error-message">{error}</div>}

      {/*⏳ Ако зареждаме: */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        //⌛ Докато чакат филмите да се заредят, виждаш съобщение „Loading…“

        //🎥 Когато имаме филми:
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        //🎉 Когато всичко е наред и имаме филми, показваме ги като картички (MovieCard) една до друга.
      )}
    </div>
  );
}

export default Home;
//📤 Изнасяме компонента, за да може другите файлове да го използват.
