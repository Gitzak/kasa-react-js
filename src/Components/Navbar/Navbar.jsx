import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../Constants/index";

const Navbar = ({ onSearch }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow p-3">
            <div className="container px-4 px-lg-5">
                <Link className="navbar-brand" to="/home">
                    <img className="img-fluid" width="130" src={images.logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                À Propos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Articles
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {/* <li className="search-box-container">
                            <div className="search-box mt-1">
                                <form onSubmit={handleSearchSubmit}>
                                    <input type="text" name="q" placeholder="Search anything" className="search-input" value={searchQuery} onChange={handleSearchInputChange} />
                                    <button type="submit" onClick={handleSearchSubmit} className="search-btn">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </form>
                            </div>
                        </li> */}
                        <li id="btn-sign-in" className="nav-item">
                            <Link className="nav-link mt-1" to="#">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default React.memo(Navbar);
