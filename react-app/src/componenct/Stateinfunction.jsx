import React, { useState } from "react";


const Stateinfunction = (props) => {
    const [dataState, setdataState] = useState({
        id: props.id || "1",
        name: props.name || "Toyo",
        counter: 0,
    });

    const userClickPlus = () => {
        setdataState({
            ...dataState,
            counter: dataState.counter + 1,
        });
    };
    const userClickMinus = () => {
        setdataState({
            ...dataState,
            counter: dataState.counter - 1,
        });
    };


    return (
        <div>
            <h2>State in Function</h2>

            <strong>Name</strong>: {dataState.name} <p></p>


            <strong>Counter</strong> = {dataState.counter} <p></p>

            <div>
                <button onClick={userClickPlus}>+</button>
                <button style={{marginLeft: "10px",}} onClick={userClickMinus}>-</button>
            </div>
            
        </div>
    );
};
export default Stateinfunction;