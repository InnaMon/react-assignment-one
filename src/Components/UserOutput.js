import React, { Component } from 'react';
import './UserOutput.css';

const UserOutput = () => {
    const style = {
        color: 'hotpink'
      }

    return (
        <div>
            <p style={style}>Hello! I am so excited about this first React.js assignment!</p>
            <p>It may be work but it WILL be worth it!!</p>
        </div>
    )
}

export default UserOutput;