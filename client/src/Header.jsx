import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";
export default function Header()
{
    const{user} = useContext(UserContext);
    return(
        <header className=' flex justify-between'>
      <Link to={'/'} href="" className="flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
      </svg>
      <span className='font-bold text-xl'>Hotelier</span>
      </Link>
      <div className='flex gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300'>
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any Week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className='bg-primary text-white p-1 rounded-full'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        </button>
    </div>
        <Link to={user?'/account':'/login'} className='flex items-center gap-2 border border-gray-300 rounded-full p-2 px-4 shadow-md shadow-gray-300'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
        </div>
        {!!user && (
            <div>
                {user.name}
            </div>
        )}
        </Link>
    </header>
    );
}