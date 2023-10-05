import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";

const Counter = () => {
    const [counter, setcounter] = useState(0);

    const cnt = () => {
        for (let i = 0; i < 1000000; i++) {
            return counter * i;
        }
    };
    console.log(cnt);
    return (
        <div>
            <Navbar />
            <button onClick={(e) => setcounter(counter + 1)}>+</button>
            <h2>{counter}</h2>
            <h3>{counter}</h3>
        </div>
    );
};

export default Counter;
