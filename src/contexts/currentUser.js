import { createContext, useEffect, useState } from "react";

export const CurrentUser = createContext()

export default function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const userCheck = async () => {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/authentication/profile`, {
                credentials: "include"
            })
            try {
                const data = await response.json()
                setCurrentUser(data)
            } catch (error) {
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