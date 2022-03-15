import React, { useState } from "react";

const scaleNames:any = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

function TemperatureInput(props:any) {

    const handleChange = (e:any) => {
        props.onTemperatureChange(e.target.value)
    }

    return (
        <>
            <fieldset>Enter temperature in {scaleNames[props.scale]}:</fieldset>
            <input value={props.temperature}
                onChange={handleChange} />
        </>
    )
}

export default TemperatureInput