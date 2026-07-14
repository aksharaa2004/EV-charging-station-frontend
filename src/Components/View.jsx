import axios from 'axios'
import { useEffect, useState } from 'react'

const View = () => {

    const [data, changeData] = useState([])

    const fetchData = () => {

        axios.post("http://localhost:3000/view_booking").then(

            (response) => {

                changeData(response.data)

            }

        ).catch((error) => {
            console.log(error)
        })

    }

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <div>

            <div className="container mt-4">

                <h2 className="text-center mb-4">
                    View EV Charging Bookings
                </h2>

                <div className="row g-3">

                    <div className="col-12">

                        <table className="table table-light table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th scope="col">Booking ID</th>
                                    <th scope="col">Owner Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Vehicle Registration Number</th>
                                    <th scope="col">Vehicle Brand</th>
                                    <th scope="col">Vehicle Model</th>
                                    <th scope="col">Battery Capacity (kWh)</th>
                                    <th scope="col">Connector Type</th>
                                    <th scope="col">Charging Date</th>
                                    <th scope="col">Time Slot</th>
                                    <th scope="col">Estimated Units (kWh)</th>
                                    <th scope="col">Charging Bay Number</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    data.map((value, index) => {

                                        return (

                                            <tr key={index}>
                                                <th scope="row">{value.booking_id}</th>
                                                <td>{value.owner_name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.vehicle_registration_number}</td>
                                                <td>{value.vehicle_brand}</td>
                                                <td>{value.vehicle_model}</td>
                                                <td>{value.battery_capacity}</td>
                                                <td>{value.connector_type}</td>
                                                <td>{value.charging_date}</td>
                                                <td>{value.time_slot}</td>
                                                <td>{value.estimated_units}</td>
                                                <td>{value.charging_bay_number}</td>
                                            </tr>

                                        )

                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default View