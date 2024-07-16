"use client"
import { ReactNode, createContext, useEffect, useState } from "react";
import { apiMongoDB } from "../service/api";


export type ContextProps = {
    [x: string]: any
} 

interface IDataBase {
    id: string,
    link_imagem: string,
    link_video: string,
    titulo: string,
    categorie: string,
    description: string
  }

export const ContextApi = createContext<ContextProps>({} as ContextProps);



export default function ContextProvider ({children}: {children: ReactNode}) {
   
    const [modal, setModal] = useState<boolean>(false);
    const [modalInfor, setModalInfor]=useState<IDataBase[]>([])
    const [dataVideos, setDataVideos ] = useState({
        frontend: [],
        backend: [],
        mobile: []
    });

    useEffect(()=>{
        async function handleLoadingVideos () {
            const frontend = await apiMongoDB.get("/frontend");
            const backend = await apiMongoDB.get("/backend");
            const mobile = await apiMongoDB.get("/mobile");

            setDataVideos({
                frontend:frontend.data,
                backend:backend.data,
                mobile:mobile.data
            })
        }

        handleLoadingVideos();
    }, [])
  

    return(
        <ContextApi.Provider value={{
            modal, setModal, dataVideos,
            modalInfor, setModalInfor
        }}>
            {children}
        </ContextApi.Provider>
    )
}