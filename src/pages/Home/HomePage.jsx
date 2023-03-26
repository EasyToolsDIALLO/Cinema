import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import Row from '../../components/Row/Row';
import request from '../../request/Request';
import './HomePage.css';

function HomePage() {
  return (
    <div className="homeScreen">
      <Header />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Actions Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
    </div>
  );
}

export default HomePage;
