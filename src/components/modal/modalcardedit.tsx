import { useContext } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { InputSelect } from "../inputselect/input.select";
import { Textarea } from "../textarea/textarea";
import { ContextApi } from "../../contextApi/contextApi";
import exitIcon from '../../assets/icons/exit.svg';

export function ModalCardEdit () {
  const {setModal} = useContext(ContextApi)

    return(
        <>
            <div className={`
                w-full min-h-screen fixed top-0 left-0 bottom-0 right-0 bg-[#03122f81] flex items-center justify-center overflow-y-auto pt-96
                2xl:p-0 
            `}>
                <form action="" className={`
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
                        <Input inputW="w-full" title={"Titulo"} placeholder={"Adicone um titulo"} />
                        <InputSelect title={"Categoria"} />
                        <Input inputW="w-full" title={"Imagem"} placeholder={"Adicione um link de imagem"} />
                        <Input inputW="w-full" title={"Video"} placeholder={"Adicione um link de video"} />
                        <Textarea textareaH="11.2rem" inputW="w-full" title={"Descrição"} placeholder={"Adicione uma descrição"} />

                        <div className="w-full h-auto flex gap-[21rem]">
                            <Button stateButton={true} title={"GUARDAR"} route={"/"} />
                            <Button title={"LIMPAR"} route={""} />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}