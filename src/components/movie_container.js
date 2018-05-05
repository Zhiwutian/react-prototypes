import React, {Component} from "react";
import Movie from "./movies";
import axios from "axios";


class MovieContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "movies": []
        };

    }

    componentWillMount () {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((response) => {
            const moviesArray = response.data.feed.entry;
            console.log("Response:", response);
            this.setState({
                "movies": moviesArray
            });
        });
    }

    render () {
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movie info={movieInfo} key={index}/>
        } );
        console.log("The State is:",this.state);
        return (
            <div>
                {movieList}
            </div>
        )
    }


}

export default MovieContainer;

