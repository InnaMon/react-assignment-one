import React, { Component } from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    const style = {
        color: 'hotpink'
      }

    return (
        <div>
            <p style={style}>Hello! I am so excited about this first React.js assignment!</p>
            <p>Username: {props.userName}</p>
        </div>
    )
}

export default UserOutput;