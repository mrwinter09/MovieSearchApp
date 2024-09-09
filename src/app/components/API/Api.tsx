"use client";

import Image from "next/image";
import Link from "next/link";
import "./Api.css";
import LegoTeam from "../../assets/pngegg.png";

const Api = () => {
  return (
    <>
      <div className="api">
        <div className="container">
          <div className="left">
            <p>
              The Movie Search <span className="primary">App</span> uses the
              OMDB <span className="primary">API</span> to fetch movie data.
              This API allows the app to search for movies by title and{" "}
              <span className="primary">retrieve </span>
              detailed <span className="primary">information </span>, such as
              the movie's release year, genre, director, actors, and plot. The
              OMDB API provides an easy-to-use interface that returns accurate
              and up-to-date data, ensuring users can access the latest movie
              information <span className="primary">quickly</span>.
            </p>
            <br></br>
            <p>
              Additionally, the API allows for featured movies to be highlighted
              on the app's main page. By predefining movie IDs, the app can pull
              full details including posters, awards, and full plots. The
              integration with the OMDB API ensures that the app remains highly
              functional and scalable, as movie data is fetched dynamically
              based on user input or predefined selections.
            </p>
            <br></br>
            <h4>Developed for the Sogeti Front-End Developer Assessment</h4>
          </div>
          <div className="right">
            <div className="img-container">
              <Image
                src={LegoTeam}
                alt="Lego API Image"
                style={{
                  filter: "drop-shadow(0px 0px 500px #118c4f)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="btn-container">
          <Link href="/" passHref>
            <button className="btn btn-style">Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Api;
