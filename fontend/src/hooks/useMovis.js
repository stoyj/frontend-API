//Какво прави кода
//Търси филми,
//Показва популярни филми,
//Казва, ако има грешка,
//Казва дали зарежда нещо в момента.

//📦 Какво внасяме от други файлове:
//➡️ Това са вълшебни кукички от React:
//useState — използваме я, за да запазим информация (като памет).
import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";
import { getPopularMovies } from "../services/api";
//➡️ Това са функции от друг файл, който говори с интернет, за да вземе информация:
//getPopularMovies() — взима най-популярните филми.
//searchMovies(име) — търси филми по име.

//🎬 Създаваме кукичката useMovis:
//➡️ Това е наша собствена кукичка – като малко тайно чекмедже, където слагаме филми, грешки, и други неща.
const useMovis = () => {
  //🧠 Състояния (какво пазим в паметта):
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  //➡️ Тук пазим какво е написал потребителят за търсене.
  //const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  //➡️ Тук пазим ако има грешка (например няма интернет).
  const [loading, setLoading] = useState(true);
  //➡️ Тук пазим дали нещо се зарежда в момента (като "въртящото се кръгче").

  //🚀 Когато приложението стартира:
  useEffect(() => {
    const loadPopularMovies = async () => {
      //➡️ Това казва: когато приложението се отвори, изпълни loadPopularMovies().
      //А тя прави следното:
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        //➡️ Търси популярни филми и ги слага в movies.
        //Ако има грешка – показваме съобщение. Когато всичко свърши – спираме зареждането (loading = false).
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  //🔍 Когато потребителят търси нещо:
  const handleSearch = async (e) => {
    e.preventDefault();
    //➡️ Тази функция се извиква когато човек натисне "Търси".
    if (!searchQuery.trim()) return;
    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
    //Стъпките:
    //1.Ако полето е празно – не правим нищо.
    //2.Ако вече зареждаме нещо – също не правим нищо.
    //3.Ако всичко е ок:
    // започваме зареждане,
    // търсим филмите,
    // слагаме ги в movies,
    // ако има грешка – я пазим.
  };

  //📤 Какво връщаме от useMovis:
  return {
    setSearchQuery,
    movies,
    error,
    loading,
    handleSearch,
    searchQuery,
  };
  //➡️ Връщаме всичко нужно, за да може друг компонент да:
  //показва филми,
  //показва грешка,
  //показва дали зарежда,
  //търси нови филми.
};

export default useMovis;
//➡️ Даваме тази кукичка на останалия свят, за да се използва в компоненти.

//📚 Обобщение – представи си така:
//Имаш едно чекмедже (useMovis), в което:
//В началото се слагат популярни филми.
//Ако някой търси – търсиш филми и ги сменяш.
//Ако нещо се обърка – казваш "Опа, грешка".
//Показваш дали зареждаш в момента.
