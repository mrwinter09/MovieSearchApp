import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./MovieItem.css";

const MovieItem = ({
  movie,
  additionalImdbIds,
}: {
  movie: any;
  additionalImdbIds: string;
}) => {
  console.log(additionalImdbIds);
  return (
    <div className="movie-item">
      <Link
        href={`/moviesearch/${movie.imdbID}?related=${additionalImdbIds}`}
        passHref>
        <div className="movie-content">
          <Image
            src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
            alt={movie.Title}
            width={100}
            height={150}
          />
          <div className="movie-title-container">
            <p className="movie-title">{movie.Title}</p>
          </div>
          <span className="movie-bar"></span>
          <div className="movie-details">
            <p className="movie-year">
              {movie.Type} | {movie.Year}| <strong>IMDB Rating:</strong>
              {movie.imdbRating}
            </p>
          </div>
          <span className="movie-bar"></span>
          <div className="movie-details">
            <p className="movie-genre">{movie.Genre}</p>
          </div>
          <span className="movie-bar"></span>
          <div className="movie-details">
            <p className="movie-director">
              <strong>Director:</strong>
              {movie.Director}
            </p>
          </div>
          <span className="movie-bar"></span>
          <div className="movie-details">
            <p className="movie-actors">
              <strong>Actors:</strong>
              {movie.Actors}
            </p>
          </div>
          <span className="movie-bar"></span>
          <div className="movie-details">
            <p className="movie-plot">{movie.Plot}</p>
          </div>
          <span className="movie-bar"></span>
          <div className="movie-details">
            <p className="movie-awards">{movie.Awards}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
