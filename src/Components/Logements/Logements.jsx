import React, { useState, useEffect } from "react";
import LogementCard from "../LogementCard/LogementCard";
import { Loader } from "../Loader/Loader";
import NotFound from "../../Pages/NotFound";

function Logements({ searchQuery }) {
    const [logements, setLogements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchLogements = async () => {
        setIsLoading(true);
        const response = await fetch(`/db/data.json`);
        const data = await response.json();
        if (data) {
            setLogements(data);
        } else {
            setLogements([]);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchLogements();
    }, []);

    const renderLogements = () => {
        if (isLoading) {
            return <Loader />;
        }

        if (logements.length === 0) {
            return <NotFound />;
        }

        return (
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-3 justify-content-center">
                {logements.map((logement) => (
                    <LogementCard key={logement.id} logement={logement} />
                ))}
            </div>
        );
    };

    return <div>{isLoading ? <Loader /> : <div>{renderLogements()}</div>}</div>;
}

export default Logements;
