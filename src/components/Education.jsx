import React, { Component } from "react";

export default class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            university: "",
            degree: "",
            uniStartDate: "",
            uniEndDate: "",
        };
    }

    handleChange = (e) => {
        this.setState((prevState) => {
            const { name, value } = e.target;
            return { [name]: value };
        });
    };

    render() {
        return (
            <div className="education--container">
                <h2 className="education--title">Education: </h2>
                <input
                    type="text"
                    name="university"
                    className="education--school"
                    placeholder="School or University"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="degree"
                    className="education--degree"
                    placeholder="Degree or Field"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="date"
                    name="uniStartDate"
                    className="education--date-start"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="date"
                    name="uniEndDate"
                    className="education--date-end"
                    onChange={this.handleChange}
                ></input>
                <button
                    className="builder--add-btn"
                    onClick={() => this.props.add(this.state)}
                >
                    Add New
                </button>
            </div>
        );
    }
}
