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

const useMovis = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
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
  };
  return {
    setSearchQuery,
    movies,
    error,
    loading,
    handleSearch,
    searchQuery,
  };
};

export default useMovis;
