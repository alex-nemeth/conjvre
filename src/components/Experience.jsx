import React, { Component } from "react";

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience--container">
                <h2 className="experience--title">Experience: </h2>
                <input
                    type="text"
                    name="position"
                    className="experience--position"
                    placeholder="Position"
                    onChange={this.props.handleChange}
                ></input>
                <input
                    type="text"
                    name="company"
                    className="experience--company"
                    placeholder="Company Name"
                    onChange={this.props.handleChange}
                ></input>
                <input
                    type="date"
                    className="experience--date-start"
                    name="expStartDate"
                    onChange={this.props.handleChange}
                ></input>
                <input
                    type="date"
                    className="experience--date-end"
                    name="expEndDate"
                    onChange={this.props.handleChange}
                ></input>
                <br />
                <textarea
                    type="text"
                    name="notes"
                    className="experience--text"
                    placeholder="Notes"
                    onChange={this.props.handleChange}
                ></textarea>
            </div>
        );
    }
}
