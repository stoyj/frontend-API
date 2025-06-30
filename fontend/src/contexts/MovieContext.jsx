/* eslint-disable react-refresh/only-export-components */

//1. Импортираме нужните инструменти:
import { createContext, useState, useContext, useEffect } from "react";
//1.createContext()	Създава кутия с данни, която можем да споделяме навсякъде
//2.useState()	Създава променлива със стойност, която се променя
//3.useContext()	Позволява да достъпим кутията от друго място
//4.useEffect()	Изпълнява нещо, когато се зареди или промени нещо

const MovieContext = createContext();
//➡️ Това е кутията за любимите филми 🎁

export const useMovieContext = () => useContext(MovieContext);
//Създаваме кукичка за лесен достъп до контекста:
//➡️ Това ни помага лесно да използваме кутията във всеки компонент, без да пишем много код.

//Създаваме доставчика (Provider):
//➡️ Този компонент обвива цялото приложение и дава достъп до любимите филми.
//Всички деца ({children}) вътре в него ще могат да използват контекста.
export const MovieProvider = ({ children }) => {
  //Променлива favorites:
  //➡️ Това е списък с любимите филми. Започва празен.
  const [favorites, setFavorites] = useState([]);

  //Зареждаме от localStorage:
  useEffect(() => {
    const storedFavs = localStorage.getItem("favorites");

    if (storedFavs) setFavorites(JSON.parse(storedFavs));
  }, []);
  //➡️ Когато приложението се стартира:
  //Взимаме старите любими от браузъра (ако има)
  //Слагаме ги в favorites

  //Запазваме в localStorage:
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  //➡️ Всеки път, когато променим favorites, го записваме в браузъра, за да не се губи.

  //Функции за любими:
  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
    //➡️ Добавя филм в списъка.
  };

  //➡️ Махаме филм от списъка по ID.
  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  //➡️ Ако филмът вече е в любими → маха го.
  const toggleFavorites = (movie) => {
    const isAdded = favorites.find((val) => val.id === movie.id);

    if (isAdded) removeFromFavorites(movie.id);
    else addToFavorites(movie);
    //Ако не е → добавя го.
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
    //➡️ Проверява дали даден филм е в списъка с любими (връща true или false).
  };

  //Какво споделяме с другите компоненти:
  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorites,
    isFavorite,
    //➡️ Това е всичко, което другите компоненти могат да използват.
  };

  //Даваме достъп до контекста:
  return (
    //➡️ Казваме: Ето, това е нашият контекст. Нека всички деца (компоненти) да го ползват
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
