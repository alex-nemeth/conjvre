import React, { Component } from "react";

export default class Experience extends Component {
    render() {
        return (
            <div className="experience--container">
                <h2 className="experience--title">Experience: </h2>
                <input
                    type="text"
                    className="experience--school"
                    placeholder="Position"
                ></input>
                <input
                    type="text"
                    className="experience--field"
                    placeholder="Company Name"
                ></input>
                <input type="date" className="experience--date-start"></input>
                <input type="date" className="experience--date-end"></input>
                <br />
                <textarea
                    type="text"
                    className="experience--text"
                    placeholder="Notes"
                ></textarea>
            </div>
        );
    }
}
