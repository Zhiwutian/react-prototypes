import React from "react";

function Movie (props) {
    const {info} = props;
    console.log(props.info);
    return (
        <div>
            <img src={info["im:image"][2].label}/>
            <h3>{info["im:name"].label}</h3>
            <p>{info["summary"].label}</p>
        </div>
    )
}

export default Movie;