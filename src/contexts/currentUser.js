import { createContext, useEffect, useState } from "react";

export const CurrentUser = createContext()

export default function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const userCheck = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/authentication/profile`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            })
            if (response.status === 200){
                const user = await response.json()
                setCurrentUser(user)    
            } else {
                setCurrentUser(null)
            }
            
        }
        userCheck()
    }, [])

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}