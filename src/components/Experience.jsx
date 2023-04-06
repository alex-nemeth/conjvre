import React, { Component } from "react";

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: "",
            company: "",
            expStartDate: "",
            expEndDate: "",
            notes: "",
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
            <div className="experience--container">
                <h2 className="experience--title">Experience: </h2>
                <input
                    type="text"
                    name="position"
                    className="experience--position"
                    placeholder="Position"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    name="company"
                    className="experience--company"
                    placeholder="Company Name"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="date"
                    className="experience--date-start"
                    name="expStartDate"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="date"
                    className="experience--date-end"
                    name="expEndDate"
                    onChange={this.handleChange}
                ></input>
                <br />
                <textarea
                    type="text"
                    name="notes"
                    className="experience--text"
                    placeholder="Notes"
                    onChange={this.handleChange}
                ></textarea>
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
