import { Component } from "react";

class NetflixMovie extends Component{

    render() {

        return(
          <div className="col mb-2 text-center px-1 d-flex ">
            <img className="img-fluid object-fit-cover" src={this.props.src} alt="movie picture" />
          </div>
        )
    }
}

export default NetflixMovie;