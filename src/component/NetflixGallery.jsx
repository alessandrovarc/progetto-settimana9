import { Component } from "react";
import NetflixMovie from "./NetflixMovie";

class NetflixGallery extends Component {

    state = {
        films: [],
        isLoading: true,
        isError: false,
      }


      fetchFilms = () => {
        fetch("http://www.omdbapi.com/?apikey=a22eada7&s=" + this.props.movie)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('è presente un errore nella chiamata');
            }
          })
          .then((data) => {
            //console.log('film ottenuti', data);
            this.setState({
              films: data.Search || [],
              isLoading: false,
            });
          })
          .catch((err) => {
            console.log('errore nel recupero dei dati', err);
            this.setState({
              isLoading: false,
              isError: true,
            });
          });
      }

      componentDidMount() {
        console.log("componentDidMount", this.state.films)
        this.fetchFilms();
      }

    render() {
        console.log("render", this.state.films)

        return(
            <>
                <h4 className="text-white text-start">{this.props.title}</h4>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 flex-nowrap mw-100 overflow-auto py-3 movies-container ">
                    {this.state.films.map((film, i) => {
                        return (
                            <NetflixMovie key={i} src={film.Poster}/>
                        );
                    })}
                </div>
            </>
        )
    }
}

export default NetflixGallery;