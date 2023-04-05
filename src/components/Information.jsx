import React, { Component } from "react";

export default class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        };
    }

    render() {
        return (
            <div className="information--container">
                <h2 className="information--title">General information:</h2>
                <input
                    type="text"
                    name="firstName"
                    className="information--first-name"
                    placeholder="First Name"
                    onChange={this.props.handleChange}
                ></input>
                <input
                    type="text"
                    name="lastName"
                    className="information--last-name"
                    placeholder="Last Name"
                    onChange={this.props.handleChange}
                ></input>
                <input
                    type="email"
                    name="email"
                    className="information--email"
                    placeholder="Email Address"
                    onChange={this.props.handleChange}
                ></input>
                <input
                    type="text"
                    name="phone"
                    className="information--phone"
                    placeholder="Phone Number"
                    onChange={this.props.handleChange}
                ></input>
            </div>
        );
    }
}
