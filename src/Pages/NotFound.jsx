import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div>
            <section id="about">
                <div className="container px-4 h-100">
                    <div className="row gx-4 justify-content-center align-items-center" style={{ height: "80vh", backgroundColor: "background-color-of-your-choice" }}>
                        <div className="col-lg-8 text-white">
                            <h1 className="display-1 text-danger">404</h1>
                            <h2 className="text-danger my-3">Page not found</h2>
                            <Link className="btn btn-md btn-danger" to="/home">Back to home</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default NotFound;
