import React, { Component } from "react";

export default class Resume extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data.firstName + this.props.data.part);
        return (
            <div className="resume--container">
                <div className="resume--information">
                    <div className="resume--name-container">
                        <h1 className="resume--first-name">
                            {this.props.data.firstName}
                        </h1>
                        <h1 className="resume--last-name">
                            {this.props.data.lastName}
                        </h1>
                    </div>
                    <div className="resume--contact-container">
                        <p className="resume--phone">{this.props.data.phone}</p>
                        <p className="resume--email">{this.props.data.email}</p>
                    </div>
                </div>
                <hr className="resume--separator-bold" />
                <h2 className="resume--education-title">Education</h2>
                <div className="resume--education-container">
                    <div className="resume--university-container">
                        <h3 className="resume--university">
                            {this.props.data.university}
                        </h3>
                        <h3 className="resume--degree">
                            {this.props.data.degree}
                        </h3>
                    </div>
                    <div className="resume--uni-dates-container">
                        <h3 className="resume--uni-start-date">
                            {this.props.data.uniStartDate.replaceAll("-", ".")}
                        </h3>
                        <h3 className="resume--uni-end-date">
                            {this.props.data.uniEndDate.replaceAll("-", ".")}
                        </h3>
                    </div>
                </div>
                <hr className="resume--separator" />

                <h2 className="resume--experience-title">Experience</h2>
                <div className="resume--experience-container">
                    <div className="resume--work-container">
                        <h3 className="resume--position">
                            {this.props.data.position}
                        </h3>
                        <h3 className="resume--company">
                            {this.props.data.company}
                        </h3>
                        <h3 className="resume--notes">
                            {this.props.data.notes}
                        </h3>
                    </div>
                    <div className="resume--exp-dates-container">
                        <h3 className="resume--exp-start-date">
                            {this.props.data.expStartDate.replaceAll("-", ".")}
                        </h3>
                        <h3 className="resume--exp-end-date">
                            {this.props.data.expEndDate.replaceAll("-", ".")}
                        </h3>
                    </div>
                </div>
                <hr className="resume--separator" />
            </div>
        );
    }
}
