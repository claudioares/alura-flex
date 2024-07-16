import { useContext } from 'react';
import iconDel from '../../assets/icons/del.svg';
import iconEdit from '../../assets/icons/edit.svg';
import { ContextApi } from '../../contextApi/contextApi';
import { apiMongoDB } from '../../service/api';

interface IDataBase {
    id: string,
    link_imagem: string,
    link_video: string,
    titulo: string,
    categorie: string,
    description: string
  }

type propsSectionType = {
    img: string,
    data: IDataBase
}

export function CardVideo ({img, data}:propsSectionType) {
  const {setModal, setModalInfor} = useContext(ContextApi)

    async function handleDeleteVideo () {
        if(data.categorie === "frontend"){
            await apiMongoDB.delete(`/frontend`, {
                data:{
                    id:data.id
                }
            })
        };
        if(data.categorie === "backend"){
            await apiMongoDB.delete(`/backend`, {
                data:{
                    id:data.id
                }
            })
        };
        if(data.categorie === "mobile"){
            await apiMongoDB.delete(`/mobile`, {
                data:{
                    id:data.id
                }
            })
        };
    }

    async function handleEditVideos () {
        setModal(true)
        setModalInfor(data)
    }

    return(
        <div className={`
            flex flex-col gap-14 cursor-pointer hover:opacity-90
        `}>
            <section className="w-[43.2rem] h-[32.5rem] flex flex-col items-center justify-center rounded-3xl">
                <div className="w-full h-full">
                    <img src={img} alt="" className="w-full h-full object-cover"/>
                </div>
                <footer className="w-full h-[5.9rem] bg-black text-white flex items-center justify-between px-8 py-4">
                    <div 
                        className="flex items-center justify-center gap-4 cursor-pointer hover:opacity-85"
                        onClick={()=>handleDeleteVideo()}
                    >
                        <img src={iconDel} alt="Icone de lixeira" className='w-6'/>
                        <p>Deletar</p>
                    </div>
                    <div onClick={()=>handleEditVideos()} className="flex items-center justify-center gap-4 cursor-pointer hover:opacity-85">
                        <img src={iconEdit} alt="Icone de edição" className='w-6'/>
                        <p>Editar</p>
                    </div>
                </footer>
            </section>
        </div>
    )
}