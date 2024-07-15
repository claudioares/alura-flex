"use client"
import { ReactNode, createContext, useState } from "react";


export type ContextProps = {
    [x: string]: any
} 

export const ContextApi = createContext<ContextProps>({} as ContextProps);



export default function ContextProvider ({children}: {children: ReactNode}) {
   
    const [modal, setModal] = useState<boolean>(false);
  

    return(
        <ContextApi.Provider value={{
            modal, setModal
        }}>
            {children}
        </ContextApi.Provider>
    )
}