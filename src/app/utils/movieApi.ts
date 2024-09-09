import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const fetchRandomMoviesByIds = async (
  movieIds: string[]
): Promise<any[]> => {
  try {
    const promises = movieIds.map((id) =>
      axios.get(`${baseUrl}&i=${id}`).then((response) => response.data)
    );
    const movieData = await Promise.all(promises);
    return movieData;
  } catch (error) {
    console.error("Error fetching random movies: ", error);
    return [];
  }
};

export const fetchMoviesBySearch = async (
  searchText: string
): Promise<any[]> => {
  try {
    const response = await axios.get(`${baseUrl}&s=${searchText}`);
    console.log(response);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movie data: ", error);
    return [];
  }
};

export const fetchMovieById = async (movieId: string): Promise<any> => {
  try {
    const response = await axios.get(`${baseUrl}&i=${movieId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie by ID: ", error);
    return null;
  }
};
