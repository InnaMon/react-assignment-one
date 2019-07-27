import React, { Component } from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p>Hello! I am so excited about this first React.js assignment!</p>
            <p>It may be work but it WILL be worth it!!</p>
            <p>Username: {props.userName}</p>
        </div>
    )
}

export default UserOutput;