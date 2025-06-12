const AIP_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmIxZGJlNzM5YThkMjlmMDU0YWNkNDUwNzlmZDQ3YyIsIm5iZiI6MTc0OTQ2OTg1MS44MjQsInN1YiI6IjY4NDZjYTliMTc1YTUxN2ViNWRlNmY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qwHJI0nHYUgm1_Z0nfCX8Fhg6WhqFVVRjhQzC00dplg";
const BASE_URL = "https://api.themoviedb.org";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/3/discover/movie`, {
    headers: new Headers({
      Authorization: `Bearer ${AIP_KEY}`,
    }),
  });
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/3/search/movie?query=${encodeURIComponent(query)}`,
    {
      headers: new Headers({
        Authorization: `Bearer ${AIP_KEY}`,
      }),
    }
  );
  const data = await response.json();
  return data.results;
};
