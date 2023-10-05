import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";
import NotFound from "./NotFound";

function LogementDetails() {
    const { id } = useParams();
    const [logementData, setLogementData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogementDetails = async () => {
            try {
                const response = await fetch(`/Db/data.json`);
                const data = await response.json();

                if (data) {
                    const logement = data.find((item) => item.id === id);
                    setLogementData(logement);
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } catch (error) {
                console.error("Error fetching details:", error);
                setLoading(false);
            }
        };

        fetchLogementDetails();
    }, [id]);

    if (loading) {
        return <Loader />;
    }

    if (!logementData) {
        return <NotFound />;
    }

    return (
        <div>
            <section className="bg-light py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                {logementData.pictures.map((picture, index) => (
                                    <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}></button>
                                ))}
                            </div>
                            <div className="carousel-inner">
                                {logementData.pictures.map((picture, index) => (
                                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                                        <img src={picture} className="d-block w-100" alt={`Slide ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="row gx-5 align-items-start justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-4 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-dark mb-2">{logementData.title}</h1>
                                <h2 className="card-title text-primary">{logementData.location}</h2>
                                <p className="lead fw-normal text-dark mb-4">{logementData.description}</p>
                                <h3 className="card-title mb-3 text-primary">Equipements</h3>
                                {logementData.equipments.map((equipment, index) => (
                                    <div key={index} className="badge bg-primary bg-gradient rounded-pill mb-2 p-2 mx-1">
                                        {equipment}
                                    </div>
                                ))}
                                <br />
                                <h6 className="card-title my-2 text-primary">Tags</h6>
                                {logementData.tags.map((tag, index) => (
                                    <div key={index} className="badge bg-secondary bg-gradient rounded-pill mb-2 p-2 mx-1">
                                        {tag}
                                    </div>
                                ))}
                                <div className="d-flex align-items-center mt-3">
                                    <img className="rounded-circle me-3" src={logementData.host.picture !== "" ? logementData.host.picture : "https://placehold.co/100x100@2x.png"} alt="..." />
                                    <div className="small">
                                        <div className="fw-bold text-dark">{logementData.host.name}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                            <img className="img-fluid rounded-3 my-5" src={logementData.cover !== "" ? logementData.cover : "https://placehold.co/600x600@2x.png"} alt={logementData.title} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LogementDetails;
