"use client";

import "./MovieInfomation.css";
import React, { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { fetchMovieById } from "../../utils/movieApi";

const MovieInfomation = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  let movieId = Array.isArray(params.movieId)
    ? params.movieId[0]
    : params.movieId;
  const relatedIds = searchParams.get("related")?.split(",") || [];
  const [movie, setMovie] = useState<any>(null);
  const [relatedMovieOne, SetRelatedMovieOne] = useState<any>(null);
  const [relatedMovieTwo, SetRelatedMovieTwo] = useState<any>(null);

  useEffect(() => {
    const getMovieData = async () => {
      if (movieId) {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      }
      if (relatedIds[0]) {
        const relatedMovieDataOne = await fetchMovieById(relatedIds[0]);
        SetRelatedMovieOne(relatedMovieDataOne);
      }
      if (relatedIds[1]) {
        const relatedMovieDataTwo = await fetchMovieById(relatedIds[1]);
        SetRelatedMovieTwo(relatedMovieDataTwo);
      }
    };

    getMovieData();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }
  console.log(relatedMovieOne);
  console.log(relatedMovieTwo);

  return (
    <div className="movie-info">
      <div className="container">
        <div className="main-header">
          <Image
            className="main-logo"
            src={movie?.Poster !== "N/A" ? movie?.Poster : "/no-image.png"}
            alt={movie?.Title}
            width={200}
            height={300}
          />
          <div>
            <h1>{movie?.Title}</h1>
            <p>
              {movie?.Year} | {movie?.Genre}
            </p>
            <p>
              <strong>IMDB Rating:</strong> {movie?.imdbRating}
            </p>
            <p>
              <strong>Awards:</strong> {movie?.Awards}
            </p>
          </div>
        </div>
        <div className="main-stats-content">
          <div className="about">
            <h3>Plot</h3>
            <p>{movie?.Plot}</p>
          </div>
        </div>
        <div className="related-movies">
          {relatedMovieOne && (
            <>
              <h3>Related Movies</h3>
              <div className="related-movie">
                {relatedMovieOne && (
                  <div className="related-movie-item">
                    <Link
                      href={`/moviesearch/${relatedMovieOne.imdbID}`}
                      passHref>
                      <Image
                        src={
                          relatedMovieOne?.Poster !== "N/A"
                            ? relatedMovieOne?.Poster
                            : "/no-image.png"
                        }
                        alt={relatedMovieOne?.Title}
                        width={100}
                        height={150}
                      />
                      <p>{relatedMovieOne?.Title}</p>
                    </Link>
                  </div>
                )}
                {relatedMovieTwo && (
                  <div className="related-movie-item">
                    <Link
                      href={`/moviesearch/${relatedMovieTwo.imdbID}`}
                      passHref>
                      <Image
                        src={
                          relatedMovieTwo?.Poster !== "N/A"
                            ? relatedMovieTwo?.Poster
                            : "/no-image.png"
                        }
                        alt={relatedMovieTwo?.Title}
                        width={100}
                        height={150}
                      />
                      <p>{relatedMovieTwo?.Title}</p>
                    </Link>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
        <div className="btn-container">
          <Link href="/moviesearch" passHref>
            <button className="btn btn-style">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieInfomation;
