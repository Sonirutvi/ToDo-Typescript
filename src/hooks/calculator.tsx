import React, { useState } from "react";
import TemperatureInput from "./tempinput";
import BoilingVerdict from "./boiling";

function Calculator() {

    const [scale, setScale] = useState<string>("c")
    const [temperature, setTemperature] = useState<string>("")

    const handleCelsiusChange = (value:string) => {
        setScale('c')
        setTemperature(value);
    }

    const handleFahrenheitChange = (value:string) => {
        setScale('f')
        setTemperature(value);
    }

    function toCelsius(fahrenheit:number) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius:number) {
        return (celsius * 9 / 5) + 32;
    }

    function tryConvert(temperature:string, convert: (argu: number) => number):string {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output  = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
        <>

            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange} />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange} />
            <BoilingVerdict
                celsius={parseFloat(celsius)} />

        </>
    )

}

export default Calculator