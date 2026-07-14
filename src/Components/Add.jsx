import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'


const Add = () => {

    const [input, changeData] = useState({
        booking_id: "",
        owner_name: "",
        email: "",
        phone: "",
        vehicle_registration_number: "",
        vehicle_brand: "",
        vehicle_model: "",
        battery_capacity: "",
        connector_type: "",
        charging_date: "",
        time_slot: "",
        estimated_units: "",
        charging_bay_number: ""
    })

    const inputHandler = (event) => {
        changeData({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add_booking", input)
            .then((response) => {
                console.log(response.data)
                alert("Booking Added Successfully")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <NavBar/>
     
            <h1 className="text-center mt-3">Add Booking</h1>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row g-3">

                            <div className="col-md-6">
                                <label className="form-label">Booking ID</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="booking_id"
                                    value={input.booking_id}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Owner Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="owner_name"
                                    value={input.owner_name}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone"
                                    value={input.phone}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Vehicle Registration Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="vehicle_registration_number"
                                    value={input.vehicle_registration_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Vehicle Brand</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="vehicle_brand"
                                    value={input.vehicle_brand}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Vehicle Model</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="vehicle_model"
                                    value={input.vehicle_model}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Battery Capacity (kWh)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="battery_capacity"
                                    value={input.battery_capacity}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Connector Type</label>
                                <select
                                    className="form-control"
                                    name="connector_type"
                                    value={input.connector_type}
                                    onChange={inputHandler}
                                >
                                    <option value="">Select</option>
                                    <option value="CCS2">CCS2</option>
                                    <option value="Type 2">Type 2</option>
                                    <option value="CHAdeMO">CHAdeMO</option>
                                </select>
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Charging Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="charging_date"
                                    value={input.charging_date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Time Slot</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="time_slot"
                                    placeholder="10:00 AM - 11:00 AM"
                                    value={input.time_slot}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Estimated Units (kWh)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="estimated_units"
                                    value={input.estimated_units}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label">Charging Bay Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="charging_bay_number"
                                    value={input.charging_bay_number}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12 text-center">
                                <button
                                    className="btn btn-success"
                                    onClick={readValue}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add