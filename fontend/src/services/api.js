//🔑 Първите два реда:
const AIP_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmIxZGJlNzM5YThkMjlmMDU0YWNkNDUwNzlmZDQ3YyIsIm5iZiI6MTc0OTQ2OTg1MS44MjQsInN1YiI6IjY4NDZjYTliMTc1YTUxN2ViNWRlNmY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwHJI0nHYUgm1_Z0nfCX8Fhg6WhqFVVRjhQzC00dplg";
const BASE_URL = "https://api.themoviedb.org";
//📌 Какво означават?
//AIP_KEY (вероятно трябва да е API_KEY)
//→ Това е таен ключ, който казва на сайта:
//Аз имам право да взимам информация от вас.“ BASE_URL
//→ Това е основният адрес на сайта с филмите:
//https://api.themoviedb.org

//📽️ Функцията getPopularMovies
//🧠 Какво прави:
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/3/discover/movie`, {
    //1.fetch(...) – отива до сайта и казва: "Дай ми списък с филми, които са популярни."

    headers: new Headers({
      Authorization: `Bearer ${AIP_KEY}`,
      //2.Изпраща ключа за достъп (Authorization: Bearer ...) като доказателство, че имаш право да питаш.
    }),
  });
  //3.Получава отговор (response) от сайта.
  const data = await response.json();
  //4.Превръща го в JavaScript обект: response.json().

  return data.results;
  //5.Връща само частта с филмите: data.results.
};

//🔎 Функцията searchMovies(query)
export const searchMovies = async (query) => {
  //1. Получава дума или израз от потребителя (пример: "query").
  const response = await fetch(
    `${BASE_URL}/3/search/movie?query=${encodeURIComponent(query)}`,
    //2. Отива до сайта и казва: "Може ли да ми покажеш филми, които имат „query“ в името?"
    {
      headers: new Headers({
        Authorization: `Bearer ${AIP_KEY}`,
        //3. Отново използва таен ключ (AIP_KEY) за достъп.
      }),
    }
  );
  const data = await response.json();
  return data.results;
  //Връща списък с намерените филми.
};
