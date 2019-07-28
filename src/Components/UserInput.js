import React, { Component } from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (
        <div className="UserInput">
          <input className="input" type="text" name="Username" onChange={props.type} value={props.userName}></input>
        </div>
    )
}

export default UserInput;