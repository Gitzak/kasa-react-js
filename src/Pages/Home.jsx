import React from "react";
import Header from "./../Components/Header/Header";
import Logements from "../Components/Logements/Logements";

function Home() {
    return (
        <div>
            <Header textHeader="Chez vous, partout et ailleurs" textP="Votre havre, ici, là-bas, partout, toujours, chez vous et ailleurs." />
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <Logements />
                </div>
            </section>
        </div>
    );
}

export default Home;
