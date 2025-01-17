import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddressLink from "../AddressLink";
import PlaceGallery from "../PlaceGallery";
import BookingDates from "../BookingDates";

export default function BookingPage()
{
    const {id} = useParams();
    const[booking,setBooking]=useState(null);
    useEffect(()=>{
        if(id){
            axios.get('/bookings').then(response => {
                const foundBooking=response.data.find(({_id})=> _id === id);
                if(foundBooking)
                    {
                        setBooking(foundBooking);
                    }
            });
        }
    },[id]);
    if(!booking){
        return '';
    }
    return(
        <div className="my-8">
            <h1 className=" text-xl ml-1">{booking.place.title}</h1>
            <div className="ml-1"><AddressLink className="my-2 block ">{booking.place.address}</AddressLink></div>
            <div className="bg-gray-200 p-4 my-6 rounded-2xl flex justify-between items-center">
                <div>
                    <h2 className="text-xl">Your Booking Info</h2>
                    <BookingDates booking={booking}/>
                </div>
                <div className="bg-primary p-6 text-white rounded-2xl items-center">
                    <div>Total Price</div>
                    <div className="text-3xl">INR {booking.price}</div>
                </div>
            </div>
            <PlaceGallery place={booking.place}/>
        </div>
    );
}