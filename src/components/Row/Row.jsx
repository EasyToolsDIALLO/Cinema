import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../../request/axios';
import './RowStyle.css';

function Row({ title, fetchUrl, isLarge = false }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const requests = await axios.get(fetchUrl);
      setMovie(requests.data.results);
      return requests;
    }

    fetchdata();
  }, [fetchUrl]);

  console.log(movie);
  const base_URL = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="row">
      <h1 style={{ margin: '5px' }}>{title}</h1>
      <div className="row_container">
        {movie.map(
          (item) =>
            ((isLarge && item.poster_path) ||
              (!isLarge && item.backdrop_path)) && (
              <img
                src={`${base_URL}${
                  isLarge ? item.poster_path : item.backdrop_path
                }`}
                className={`row_poster ${isLarge && 'row_posterLarge'}`}
                alt={item.title}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
