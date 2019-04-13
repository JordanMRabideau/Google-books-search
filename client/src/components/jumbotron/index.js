import React from 'react';

function Jumbotron() {
    return (
      <div
        style={{height: 300, clear: "both", marginTop: 50, paddingTop: 120, textAlign: "center"}}
        className="jumbotron"
      >
        <h1>Google Books Searcher</h1>
        <h3>Search and save books from the Google Books API <br></br> Search a book to get started</h3>
      </div>
    )
}

export default Jumbotron;