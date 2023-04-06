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

    handleChange = (e) => {
        this.setState((prevState) => {
            const { name, value } = e.target;
            return { [name]: value };
        });
        console.log(this.state);
    };

    render() {
        return (
            <div className="information--container">
                <h2 className="information--title">General information:</h2>
                <input
                    type="text"
                    name="firstName"
                    className="information--first-name"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    value={this.state.firstName}
                ></input>
                <input
                    type="text"
                    name="lastName"
                    className="information--last-name"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    value={this.state.lastName}
                ></input>
                <input
                    type="email"
                    name="email"
                    className="information--email"
                    placeholder="Email Address"
                    onChange={this.handleChange}
                    value={this.state.email}
                ></input>
                <input
                    type="text"
                    name="phone"
                    className="information--phone"
                    placeholder="Phone Number"
                    onChange={this.handleChange}
                    value={this.state.phone}
                ></input>
                <button
                    className="builder--add-btn"
                    onClick={() => this.props.save(this.state)}
                >
                    Save
                </button>
            </div>
        );
    }
}
