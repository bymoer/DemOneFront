import { useGetBookingQuery } from "../../features/api/apiSlice"

export const SingleBooking = ({...props}) => {
    const {data: singleBooking, isLoading: bookingLoading} = useGetBookingQuery(props.id)

    return(
        <>
            {!bookingLoading ?
                <div>
                    <h3>Single Booking Compoohnent</h3>
                    <p>{singleBooking.message.customerFirstName}</p>
                </div>
                :
                <p>Booking Details Loading</p>
            }
        </>
    )

}