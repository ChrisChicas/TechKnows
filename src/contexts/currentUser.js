import { createContext, useEffect, useState } from "react";

export const CurrentUser = createContext()

export default function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const userCheck = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/authentication/profile`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json'
                }
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        userCheck()
    }, [])

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}