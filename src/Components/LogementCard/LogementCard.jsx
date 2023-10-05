import React from "react";
import { Link } from "react-router-dom";

function logementCard({ logement }) {
    return (
        <div className="col mb-5">
            <div className="card h-100 bg-dark text-white shadow">
                <Link to={`/logement/${logement.id}`} className="text-decoration-none">
                    <img className="card-img-top img-fluid" src={logement.cover !== "N/A" ? logement.cover : "https://placehold.co/600x600@2x.png"} alt={logement.Title} />
                </Link>
                <div className="card-body p-4">
                    <div className="text-left">
                        <h5 className="fw-bolder">
                            <Link to={`/logement/${logement.id}`} className="text-decoration-none" style={{ color: "#ffffff", textDecoration: "none" }}>
                                {logement.title}
                            </Link>
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default logementCard;
