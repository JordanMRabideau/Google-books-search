import React from 'react';

function TextInput(props) {
    return (
        <div className="form-group">
            <input className="form-control" {...props}/>
        </div>
    )
}

export default TextInput;