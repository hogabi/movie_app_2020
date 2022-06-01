import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import './Home.css';

//설치 파일: 
//npm install prop-types
//npm install axios
//npm install react-router-dom

//시작 메뉴
//npm start

//https://yts.mx/api/v2/list_movies.json
//https://yts-proxy.now.sh/list_movies.json

class Home extends React.Component {

  state = {
    isLoading: true,
    movie: [],
  };

  getMovies = async () => {
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');

    const {
      data: {
        data: {movies},
      }
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');

    this.setState({movies, isLoading: false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return ( 
      <section>
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading.....</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie => 
              <Movie
                key={movie.id} 
                id={movie.id} 
                title={movie.title} 
                year={movie.year} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>

    );          
  }
  
}

export default Home;
