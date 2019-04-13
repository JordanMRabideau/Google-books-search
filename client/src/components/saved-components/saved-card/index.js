import React from "react";
// import "./style.css"


function SavedCard(props) {
    return (
        <div className="container pt-2 pb-2 mb-2 book-card">
            <div className="row">
                <div className="col-md-4">
                    <h4 className="book-title">{props.title}</h4>
                    <h5 className="book-author">Author(s): {props.author}</h5>
                </div>
                <div className="col-md-8 float-right">
                    <a className="btn btn-primary link-button float-right" href={props.link}>View</a>
                    <button className="btn btn-primary save-button float-right" 
                    onClick={ () => {
                        props.method(props.id)
                    }}>{window.location.pathname === "/" ? "Save" : "Delete"}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <img className="book-image" src={props.image} alt={props.title}></img>
                </div>
                <div className="col-md-9">
                    <p className="synopsis">{props.synopsis}</p>
                </div>
            </div>
        </div>
    )
}

export default SavedCard;