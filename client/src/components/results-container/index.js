import React from 'react';
import "./style.css"

function ResultsContainer(props) {
  return (
    <div className="container mb-3 results-container">
      <h4>Results</h4>
      {props.children}
    </div>
  )
}

export default ResultsContainer