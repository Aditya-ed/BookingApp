import { useState } from "react";
import {differenceInCalendarDays} from "date-fns"
import axios from "axios";
import { Navigate } from "react-router-dom";
export default function BookingWidget({place})
{
    const[checkIn,setCheckIn] = useState('');
    const[checkOut,setCheckOut] = useState('');
    const[name,setName]=useState('');
    const[phone,setPhone]=useState('');
    const[numberOfGuests,setNumberOfGuests]=useState(1);
    const[redirect,setRedirect]=useState('');

    let numberOfNights = 0;
    if(checkIn && checkOut)
        {
            numberOfNights=differenceInCalendarDays(new Date(checkOut),new Date(checkIn));
        }

    async function bookThisPlace(){
        const response = await axios.post('/bookings',{checkIn,checkOut,numberOfGuests,name,phone,
            place:place._id,price:numberOfNights * place.price});
            const bookingId=response.data._id;
            setRedirect(`/account/bookings/${bookingId}`);
    }

if(redirect)
    {
        return <Navigate to={redirect}/>
    }
    
    return (
        <div className="bg-white shadow p-4 rounded-2xl">
                            <div className="text-2xl text-center">Price: INR {place.price}/per night</div>
                            <div className="border rounded-2xl mt-4">
                                <div className="flex">
                                    <div className="px-3 py-4">
                                        <label>Check in: </label>
                                        <input type="date" value={checkIn} onChange={ev=>setCheckIn(ev.target.value)}/>
                                    </div>
                                    <div className="px-3 border-l py-4">
                                        <label>Check out: </label>
                                        <input type="date"  value={checkOut} onChange={ev=>setCheckOut(ev.target.value)}/>
                                    </div>    
                                </div>
                                <div className="px-3 border-l py-4 border-t">
                                    <label>Guests</label>
                                    <input type="number" value={numberOfGuests} onChange={ev => setNumberOfGuests(ev.target.value)} />
                                </div>
                            </div>
                            {numberOfNights > 0 && (
                                <div className="px-3 border-l py-4 border-t">
                                <label>Your full name:</label>
                                <input type="text" value={name} onChange={ev => setName(ev.target.value)} />
                                <label>Phone number:</label>
                                <input type="tel" value={phone} onChange={ev => setPhone(ev.target.value)} />
                                </div>
                            )}
                            <button onClick={bookThisPlace} className="primary mt-4">Book this Place
                                {numberOfNights>0 &&(
                                    <span> INR {numberOfNights * place.price}</span>
                                )}
                            </button>
                        </div>
    );
}