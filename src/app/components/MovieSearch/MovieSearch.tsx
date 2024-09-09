"use client";

import React, { useState, useEffect, useMemo } from "react";
import { slice } from "lodash";
import MovieItem from "../MovieItems/MovieItems";
import "./MovieSearch.css";
import movieIdsData from "./randomMovieIds.json";
import {
  fetchRandomMoviesByIds,
  fetchMoviesBySearch,
} from "../../utils/movieApi";

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState<any[] | null>(null);
  const [index, setIndex] = useState(5);
  const [randomMovies, setRandomMovies] = useState<any[]>([]);
  const randomMovieIds = movieIdsData.movieIds;
  const [isSearching, setIsSearching] = useState(false);

  const getRandomMovieIds = () => {
    const shuffled = randomMovieIds.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (searchText.length > 2) {
        setIsSearching(true);
        const searchResults = await fetchMoviesBySearch(searchText);
        const imdbIds = searchResults.map((movie: any) => movie.imdbID);
        if (imdbIds.length > 0) {
          const movieData = await fetchRandomMoviesByIds(
            imdbIds.sort(() => 0.5 - Math.random())
          );
          setMovies(movieData);
        } else {
          setMovies([]);
        }
      } else {
        setIsSearching(false);
        if (randomMovies.length === 0) {
          const movieData = await fetchRandomMoviesByIds(getRandomMovieIds());
          setRandomMovies(movieData);
          setMovies(movieData);
        } else {
          setMovies(randomMovies);
        }
      }
    };

    const timeoutId = setTimeout(fetchMovies, 500);
    return () => clearTimeout(timeoutId);
  }, [searchText, randomMovies]);

  const displayedMovies = useMemo(() => {
    return slice(movies ?? [], 0, index);
  }, [movies, index]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="search-page">
        <div className="container">
          <div className="search-banner">
            <h1>{searchText ? "Search Results" : "Top Rated Movies"}</h1>
            <form onSubmit={handleFormSubmit}>
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="text"
                placeholder="Search for a movie title"
              />
            </form>
          </div>
          <div className="movie-grid">
            {displayedMovies.length > 0 ? (
              displayedMovies.map((movie, index) => {
                const additionalMovies = displayedMovies
                  .filter((m) => m.imdbID !== movie.imdbID)
                  .slice(0, 2);
                const additionalImdbIds = additionalMovies
                  .map((m) => m.imdbID)
                  .join(",");
                return (
                  <MovieItem
                    key={index}
                    movie={movie}
                    additionalImdbIds={additionalImdbIds}
                  />
                );
              })
            ) : isSearching && searchText.length > 2 ? (
              <h3>Movie not found</h3>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieSearch;
