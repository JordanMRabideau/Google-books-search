import React from 'react';
import "./style.css"

function Form(props) {
    return (
        <div>
            <div className="form-container container mb-3">
                <h4 className="mt-3">Book Search</h4>
                {props.children}
            </div>
        </div>
    )
}

export default Form