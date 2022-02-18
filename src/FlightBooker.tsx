import React, { useState } from 'react';
import type { FormEvent } from 'react';

function FlightBooker() {

    const [tempC, setTempC] = useState(0);

    const c_changed = (evt: FormEvent<HTMLElement>) => {
        // console.log(evt.target)
        const { value } = evt.target as typeof evt.target & { value: number }
        console.log(value)
        setTempC(value)
    }

    return (
        <div className="flightbooker">
            <h1>Flight Booker</h1>
            <select
                name="flight"

            >
                <option value="one-way">one-way</option>
                <option value="round-trip">round-trip</option>
            </select>
            <input
                type="text"
                name="flight_one"
                value="test content"
            // onChange={}
            />
            <input
                type="text"
                name="flight_two"
                value="test content"
            // onChange={}
            />
        </div>
    )
}

export default FlightBooker