import { FormEvent, useContext, useState } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { InputSelect } from "../inputselect/input.select";
import { Textarea } from "../textarea/textarea";
import { ContextApi } from "../../contextApi/contextApi";
import exitIcon from '../../assets/icons/exit.svg';
import { apiMongoDB } from "../../service/api";

export function ModalCardEdit () {
  const {
    setModal, modalInfor
} = useContext(ContextApi);

// informações dos formularios
const [title, setTitle] = useState<string>(modalInfor.titulo);
const [categorie, setCategorie] = useState<string>(modalInfor.categorie);
const [image, setImage] = useState<string>(modalInfor.link_imagem);
const [video, setVideo] = useState<string>(modalInfor.link_video);
const [description, setDescription] = useState<string>(modalInfor.description);

function handleCleanForm () {
    setTitle('');
    setCategorie('');
    setImage('');
    setVideo('');
    setDescription('')
}

async function handleSubmit (e:FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!modalInfor.title){
        console.log("Titulo nescesario");
        return
    }
    if(!modalInfor.categorie){
        console.log("categoria nescesario");
        return;
    }
    if(!modalInfor.link_imagem){
        console.log("imagem nescesario");
        return;
    }
    if(!modalInfor.link_video){
        console.log("video nescesario");
        return;
    }

    
    if(modalInfor.categorie === 'frontend'){
        await apiMongoDB.post('/frontend', {
            title,
            link_video:video,
            link_image:image,
            categorie,
            description,
        });
        handleCleanForm();

        return;
    };

    if(modalInfor.categorie === 'backend'){
        await apiMongoDB.post('/backend', {
            title,
            link_video:video,
            link_image:image,
            categorie,
            description,
        });
        handleCleanForm();

        return;
    };

    if(modalInfor.categorie === 'mobile'){
        await apiMongoDB.post('/mobile', {
            title,
            link_video:video,
            link_image:image,
            categorie,
            description,
        });
        handleCleanForm();

        return;
    };

}

    return(
        <>
            <div className={`
                w-full min-h-screen fixed top-0 left-0 bottom-0 right-0 bg-[#03122f81] flex items-center justify-center overflow-y-auto pt-96
                2xl:p-0 
            `}>
                <form onSubmit={handleSubmit} action="" className={`
                    relative
                    flex flex-col justify-center items-center 
                    gap-[4.3rem] w-auto h-auto bg-[#031230]
                    rounded-[1.5rem]
                `}>
                    <div onClick={()=>setModal(false)} className="w-auto flex items-end absolute top-28 left-[85%]">
                        <img src={exitIcon} alt="Icone de saida" className="hover:opacity-90 cursor-pointer"/>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full max-h-auto p-24 gap-[4.3rem]">
                        <h1 className="text-[6rem] font-black text-blue">EDITAR CARD:</h1>
                        <Input 
                            inputW="w-full" 
                            title={"Titulo"} 
                            placeholder={"Adicone um titulo"} 
                            value={title} 
                            func={setTitle} 
                        />
                        <InputSelect 
                            title={"Categoria"} 
                            value={categorie} 
                            func={setCategorie} 
                        />
                        <Input 
                            inputW="w-full" 
                            title={"Imagem"} 
                            placeholder={"Adicione um link de imagem"} 
                            value={image} 
                            func={setImage} 
                        />
                        <Input 
                            inputW="w-full" 
                            title={"Video"} 
                            placeholder={"Adicione um link de video"} 
                            value={video} 
                            func={setVideo} 
                        />
                        <Textarea 
                            textareaH="11.2rem" 
                            inputW="w-full" 
                            title={"Descrição"} 
                            placeholder={"Adicione uma descrição"} 
                            value={description} 
                            func={setDescription} 
                        />

                        <div className="w-full h-auto flex gap-[21rem]">
                            <Button stateButton={true} type="submit" title={"GUARDAR"} route={"/"} />
                            <Button title={"LIMPAR"} func={handleCleanForm} route={""} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}