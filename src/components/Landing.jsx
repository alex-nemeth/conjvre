import React, { Component } from "react";

export default class Landing extends Component {
    render() {
        return (
            <div className="landing--container">
                <h1 className="builder--welcome">Welcome!</h1>
                <h3>CONJVRE is a simple CV building app. </h3>
                <p className="builder--description">
                    The app will guide you through multiple sections you would
                    normally have on your CV, where all the work you have to do
                    is filling out simple forms, one at a time. CONJVRE will do
                    the rest of the heavy lifting for you, and progressively put
                    your data onto a page which you can download as a PDF at the
                    end.
                </p>
                <p className="builder--description">
                    To start, click the button below.
                </p>
            </div>
        );
    }
}
