import React, { Component } from "react";

export default class Information extends Component {
    render() {
        return (
            <div className="information--container">
                <h2 className="information--title">General information:</h2>
                <input
                    type="text"
                    className="information--first-name"
                    placeholder="First Name"
                ></input>
                <input
                    type="text"
                    className="information--last-name"
                    placeholder="Last Name"
                ></input>
                <input
                    type="email"
                    className="information--email"
                    placeholder="Email Address"
                ></input>
                <input
                    type="text"
                    className="information--phone"
                    placeholder="Phone Number"
                ></input>
            </div>
        );
    }
}
