import React, { Component } from "react";

export default class Education extends Component {
    render() {
        return (
            <div className="education--container">
                <h2 className="education--title">Education: </h2>
                <input
                    type="text"
                    className="education--school"
                    placeholder="School or University"
                ></input>
                <input
                    type="text"
                    className="education--field"
                    placeholder="Field"
                ></input>
                <input type="date" className="education--date-start"></input>
                <input type="date" className="education--date-end"></input>
            </div>
        );
    }
}
