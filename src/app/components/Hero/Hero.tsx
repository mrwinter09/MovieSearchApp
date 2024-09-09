"use client";

import Image from "next/image";
import Link from "next/link";
import "./Hero.css";
import LegoTeam from "../../assets/movie-clip.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="left">
            <p>
              Welcome to the Movie Search App, built by Ivan Winter for the
              Sogeti Front-End Developer Assessment. This app allows you to
              easily search for movies, providing detailed information on each
              movie including the title, year of release, genre, director, and
              more.
            </p>
            <br></br>
            <p>
              The app uses the OMDB API to deliver accurate and up-to-date movie
              data. You can search by movie title and access the top 5 results
              for each query. Additionally, the app highlights featured movies,
              giving you an overview of selected films along with their posters
              and full plots.
            </p>
            <br></br>
            <h4>Developed for the Sogeti Front-End Developer Assessment</h4>
          </div>
          <div className="right">
            <div className="img-container">
              <Image
                src={LegoTeam}
                alt=""
                style={{
                  filter: "drop-shadow(0px 0px 500px #118c4f)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <Link href="/moviesearch" passHref>
            <button className="btn btn-style">Start Searching</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
