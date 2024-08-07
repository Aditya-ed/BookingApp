import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {data} from "autoprefixer";
export const UserContext = createContext({});

export function UserContextProvider({children})
{
    const [user,setUser] = useState(null);
    const [ready,setReady]=useState(false);

    useEffect(() =>{
        if(!user) {
           axios.get('/profile').then(({data})=>{
            setUser(data);
            setReady(true);
           });
           setUser(data);
        }
    },[]);
    return (
        <UserContext.Provider value={{user,setUser, ready}}>
            {children}
        </UserContext.Provider>
        
    );
}