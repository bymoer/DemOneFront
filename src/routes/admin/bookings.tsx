import React, { MouseEventHandler, useEffect, useState } from "react";
import { useGetBookingQuery, useGetbookingsQuery } from "../../features/api/apiSlice";
import { SingleBooking } from "./singlebooking";
import { EditBooking } from "./editbooking";

export const Bookings = ({...props}) => {
    const [viewSingleBooking, setViewSingleBooking] = useState(false)
    const [viewEditBooking, setViewEditBooking] = useState(false)
    const [bookingId, setBookingId] = useState('')

    const {data: bookings, isLoading: loadingBookings} = useGetbookingsQuery();

    console.log(bookings)

    const viewBooking = (elm: any) => {
        setBookingId(elm.currentTarget.dataset.id)

        if(viewEditBooking){
            setViewEditBooking(false)
        }

        setViewSingleBooking(true)
    }

    const editBooking = (elm: any) => {
        setBookingId(elm.currentTarget.dataset.id)

        if(viewSingleBooking){
            setViewSingleBooking(false)
        }

        setViewEditBooking(true)
    }

    return(
        <>
            <h1>Bookings</h1>
            {!loadingBookings ?
                <ul>
                    {bookings.message.map((booking: any) => 
                        <li key={booking._id}>
                            <p>Customer Name: {booking.customerFirstName} {booking.customerMiddleName} {booking.customerLastName}</p>
                            <p>Number of people: {booking.numberOfPeople}</p>
                            <p>Phone Number: {booking.customerPhone}</p>
                            <p>Room Booked: {booking.roomBooked}</p>
                            <p>Duration: {booking.durationStart} - {booking.durationEnd}</p>
                            <button data-id={booking._id} onClick={viewBooking}>Details</button><button data-id={booking._id} onClick={editBooking}>Edit</button>
                        </li>
                    )}
                </ul>
                : 
                <p>No Data!</p>
            }

            {viewSingleBooking ? <SingleBooking id={bookingId} /> : <></>}
            
            {viewEditBooking ? <EditBooking id={bookingId} /> : <></>}

        </>
    )

}