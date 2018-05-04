import React from "react";

function ScrapbookImages (props) {
    console.log(props);
    const {src, style} = props.about;
    return (
        <img className="scrapbook-image" src={src} style={style}/>
    )

}

export default ScrapbookImages;