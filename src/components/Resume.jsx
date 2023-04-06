import React, { Component } from "react";

export default class Resume extends Component {
    constructor(props) {
        super(props);
    }

    informationData = () => {
        const informationData = this.props.data.information;
        return (
            <div className="resume--information">
                <div className="resume--name-container">
                    <h1 className="resume--first-name">
                        {informationData.firstName}
                    </h1>
                    <h1 className="resume--last-name">
                        {informationData.lastName}
                    </h1>
                </div>
                <div className="resume--contact-container">
                    <p className="resume--phone">{informationData.phone}</p>
                    <p className="resume--email">{informationData.email}</p>
                </div>
            </div>
        );
    };

    educationData = () => {
        const educationData = this.props.data.education;
        return educationData.map((obj) => (
            <>
                <div className="resume--university-container">
                    <h3 className="resume--university">{obj.university}</h3>
                    <h3 className="resume--degree">{obj.degree}</h3>
                </div>
                <div className="resume--uni-dates-container">
                    <h3 className="resume--uni-start-date">
                        {obj.uniStartDate.replaceAll("-", ".")}
                    </h3>
                    <h3 className="resume--uni-end-date">
                        {obj.uniEndDate.replaceAll("-", ".")}
                    </h3>
                </div>
            </>
        ));
    };

    render() {
        return (
            <div
                className={`resume--container ${
                    this.props.data.smallPreview ? "small" : "large"
                }`}
            >
                {this.informationData()}
                <hr className="resume--separator-bold" />
                <h2 className="resume--education-title">Education</h2>
                <div className="resume--education-container">
                    {this.educationData()}
                </div>
                <hr className="resume--separator" />

                <h2 className="resume--experience-title">Experience</h2>
                <div className="resume--experience-container">
                    <div className="resume--work-container">
                        <h3 className="resume--position">
                            {this.props.data.experience[0].position}
                        </h3>
                        <h3 className="resume--company">
                            {this.props.data.experience[0].company}
                        </h3>
                        <h3 className="resume--notes">
                            {this.props.data.experience[0].notes}
                        </h3>
                    </div>
                    <div className="resume--exp-dates-container">
                        <h3 className="resume--exp-start-date">
                            {this.props.data.experience[0].expStartDate.replaceAll(
                                "-",
                                "."
                            )}
                        </h3>
                        <h3 className="resume--exp-end-date">
                            {this.props.data.experience[0].expEndDate.replaceAll(
                                "-",
                                "."
                            )}
                        </h3>
                    </div>
                </div>
                <hr className="resume--separator" />
            </div>
        );
    }
}
