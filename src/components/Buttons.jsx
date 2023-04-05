import React, { Component } from "react";

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="builder--buttons">
                {this.props.part > 0 && (
                    <button
                        className="builder--back-btn"
                        onClick={this.props.back}
                    >
                        Back
                    </button>
                )}

                <button className="builder--next-btn" onClick={this.props.next}>
                    Next
                </button>
            </div>
        );
    }
}
