import moment from 'moment';
import React, { useEffect, useState } from 'react';
// import type { FormEvent } from 'react';

function FlightBooker() {

    const [flightType, setFlightType] = useState("one-way");
    const [start, setStart] = useState(new Date().toISOString().substring(0, 10))
    const [end, setEnd] = useState(new Date().toISOString().substring(0, 10)) //.toISOString().substring(0, 10)
    const [bookable, setBookable] = useState(true)
    const [error, setError] = useState("")

    //helper functions

    //moment library does this without fuss. no reason to invent the wheel.
    function isValidDate(strDate: string): boolean{
        return moment(strDate, "YYYY-MM-DD", true).isValid();
    }

    useEffect(() => {
        // console.log(Date.parse(start), Date.parse(end))
        // console.log(Date.parse(start) > Date.parse(end))
        if (!isValidDate(end) || !isValidDate(start)) {
            setBookable(false)
            setError("that's not a real date")
            console.error(error)
        }
        else if (Date.parse(end) < Date.parse(start)) {
            // console.log("dates", start, end)
            setBookable(false)
            setError("return flight cannot predate initial flight")
            console.error(error)
        }
        else {
            setBookable(true)
            setError("")
            // console.log("dates", start, end)
        }
    }, [end, start, error])

    useEffect(()=>{
        setEnd(start);
    }, [flightType, start])

    return (
        <div className="flightbooker">
            <h1>Flight Booker</h1>
            {/* <label>{error}</label> */}
            <select
                name="flight"
                onChange={(e) => setFlightType(e.target.value)}
            >
                <option value="one-way">one-way</option>
                <option value="round-trip">round-trip</option>
            </select>

            {
                isValidDate(start) ?
                (<input className="valid"
                    type="text"
                    name="flight_one"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}/>
                )
                :
                (<input className="err"
                    type="text"
                    name="flight_one"
                    value={start}
                    onChange={(e) => setStart(e.target.value)}/>
                )
            }
            {
                isValidDate(end) ?
                (<input className="valid"
                    type="text"
                    name="flight_two"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    disabled={flightType === "one-way"}/>
                )
                :
                (<input className="err"
                    type="text"
                    name="flight_two"
                    value={end}
                    onChange={(e) => setEnd(e.target.value)}
                    disabled={flightType === "one-way"}/>
                )
            }
            <button
                disabled={!bookable}
            >
                Book
            </button>
        </div>
    )
}

export default FlightBooker