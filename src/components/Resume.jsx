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
        return educationData.map((edu) => (
            <>
                <div className="resume--university-container">
                    <h3 className="resume--university">{edu.university}</h3>
                    <h3 className="resume--degree">{edu.degree}</h3>
                </div>
                <div className="resume--uni-dates-container">
                    <h3 className="resume--uni-start-date">
                        {edu.uniStartDate.replaceAll("-", ".")}
                    </h3>
                    <h3 className="resume--uni-end-date">
                        {edu.uniEndDate.replaceAll("-", ".")}
                    </h3>
                </div>
            </>
        ));
    };

    experienceData = () => {
        const experienceData = this.props.data.experience;
        return experienceData.map((exp) => (
            <>
                <div className="resume--work-container">
                    <h3 className="resume--position">{exp.position}</h3>
                    <h3 className="resume--company">{exp.company}</h3>
                    <h3 className="resume--notes">{exp.notes}</h3>
                </div>
                <div className="resume--exp-dates-container">
                    <h3 className="resume--exp-start-date">
                        {exp.expStartDate.replaceAll("-", ".")}
                    </h3>
                    <h3 className="resume--exp-end-date">
                        {exp.expEndDate.replaceAll("-", ".")}
                    </h3>
                </div>
            </>
        ));
    };

    render() {
        return (
            <div
                className={`resume--container ${
                    this.props.data.part !== 3 ? "small" : "large"
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
                    {this.experienceData()}
                </div>
            </div>
        );
    }
}
