"use client"
import { ReactNode, createContext, useLayoutEffect, useState } from "react";
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

interface IDataVideos {
    frontend: IDataBase[],
    backend: IDataBase[],
    mobile: IDataBase[]
}

export const ContextApi = createContext<ContextProps>({} as ContextProps);



export default function ContextProvider ({children}: {children: ReactNode}) {
   
    const [modal, setModal] = useState<boolean>(false);
    const [modalInfor, setModalInfor]=useState<IDataBase[]>([])

    const [ dataVideos, setDataVideos ] = useState<IDataVideos>({
        frontend: [],
        backend: [],
        mobile: []
    });

    useLayoutEffect(()=>{
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

    // informações dos formularios
    const [title, setTitle] = useState<string>("");
    const [categorie, setCategorie] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [video, setVideo] = useState<string>("");
    const [description, setDescription] = useState<string>("");
   
  

    return(
        <ContextApi.Provider value={{
            modal, setModal,
            modalInfor, setModalInfor,
            title, setTitle, categorie, setCategorie,
            image, setImage, video, setVideo, description, setDescription,

            dataVideos, setDataVideos
        }}>
            {children}
        </ContextApi.Provider>
    )
}