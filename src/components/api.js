// const API_KEY = 'cf9622ae437e8b15d1420bba018df313';
const BASE_URL = 'https://api.themoviedb.org/';

const headers = {
  accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjk2MjJhZTQzN2U4YjE1ZDE0MjBiYmEwMThkZjMxMyIsInN1YiI6IjY0ZDVmYzc4ZGI0ZWQ2MDExYzRiYTcwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y_orMpemfH91hpKs_ou-jpluJjSPnErJapPgiAuLRlU',
};

export function apiGetTrendingMovies() {
  return fetch(`${BASE_URL}3/trending/movie/day?language=en-US`, {
    method: 'GET',
    headers,
  }).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }
    return data.json();
  });
}

export function apiGetMovieDetails(movieId) {
  return fetch(`${BASE_URL}3/movie/${movieId}?language=en-US`, {
    method: 'GET',
    headers,
  }).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }
    return data.json();
  });
}

export function apiGetMovieCredits(movieId) {
  return fetch(`${BASE_URL}3/movie/${movieId}/credits?language=en-US`, {
    method: 'GET',
    headers,
  }).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }
    return data.json();
  });
}

export function apiGetMovieReviews(movieId) {
  return fetch(`${BASE_URL}3/movie/${movieId}/reviews?language=en-US&page=1`, {
    method: 'GET',
    headers,
  }).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }
    return data.json();
  });
}

export function apiSearchMovie(query) {
  return fetch(
    `${BASE_URL}3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    {
      method: 'GET',
      headers,
    }
  ).then(data => {
    if (!data.ok) {
      throw new Error(data.status);
    }
    return data.json();
  });
}
