import { useState } from "react"

interface IBooking {
    customerFirstName: string,
    customerMiddleName: string,
    customerLastName: string,
    customerPhone: string,
    customerEmail: string,
    roomBooked: string,
    durationStart: Date,
    durationEnd: Date,
    numberOfPeople: string,
    bookingVerified: boolean,
    customerAddress: {
        road: string,
        number: string,
        postalCode: string,
        country: string
    }
}

export const EditBooking = ({...props}) => {
    const [bookingInputs, setBookingInputs] = useState({})

    const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
        const name = event.currentTarget.name
        const value = event.currentTarget.value

        if(name.indexOf('.') > 0){

            const inputBooking: IBooking | any = bookingInputs

            const parentNode = name.split('.')[0]
            const childNode = name.split('.')[1]

            const newParentNode = {...inputBooking[parentNode], [childNode]: value}
            const newChildNode = {...inputBooking, [parentNode]: newParentNode }

            setBookingInputs(newChildNode)
        } else if(name.indexOf('.') <0) {

            setBookingInputs( values => ({...values, [name]: value}))

        }


    }

    // Get single booking

    // Post booking update data

    const bookingSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log(bookingInputs)
    }

    return(
        <>
            <h3>Edit Booking Compoohnent</h3>
            <form onSubmit={bookingSubmit}>
                <input name='customerFirstName' id='customerFirstName' type='text' onChange={inputChange} required></input>
                <input name='customerMiddleName' id='customerMiddleName' type='text' onChange={inputChange} required></input>
                <input name='customerLastName' id='customerLastName' type='text' onChange={inputChange} required></input>
                <input name='customerPhone' id='customerPhone' type='text' onChange={inputChange} required></input>
                <input name='customerEmail' id='customerEmail' type='text' onChange={inputChange} required></input>
                
                <input name='roomBooked' id='roomBooked' type='text' onChange={inputChange} required></input>

                <input name='durationStart' id='durationStart' type='text' onChange={inputChange} required></input>
                <input name='durationEnd' id='durationEnd' type='text' onChange={inputChange} required></input>

                <input name='numberOfPeople' id='numberOfPeople' type='text' onChange={inputChange} required></input>

                <input name='bookingVerified' id='bookingVerified' type='text' onChange={inputChange} required></input>
                
                <p>Customer Address</p>
                
                <input name='customerAddress.road' id='road' type='text' onChange={inputChange} required></input>
                <input name='customerAddress.number' id='number' type='text' onChange={inputChange} required></input>
                <input name='customerAddress.postalCode' id='postalCode' type='text' onChange={inputChange} required></input>
                <input name='customerAddress.country' id='country' type='text' onChange={inputChange} required></input>

                <input type='submit'></input>

            </form>
        </>
    )

}