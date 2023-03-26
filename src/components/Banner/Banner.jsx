import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './BannerStyle.css';
import axios from '../../request/axios';
import request from '../../request/Request';

function Banner() {
  const [movie, setMovie] = useState([]);

  function truncate(string, n) {
    if (string.length > n) return string.substr(0, n - 1) + '...';
    else return string;
  }

  useEffect(() => {
    async function Venue() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length - 1)
        ]
      );

      return requests;
    }

    Venue();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie.name || movie.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">List</button>
        </div>
        <h1 className="banner_description">
          {truncate(`${movie.overview}`, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
