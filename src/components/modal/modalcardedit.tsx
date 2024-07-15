import { Button } from "../button/button";
import { Input } from "../input/input";
import { InputSelect } from "../inputselect/input.select";
import { Textarea } from "../textarea/textarea";

export function ModalCardEdit () {
    return(
        <>
            <div className="w-full min-h-screen fixed top-0 left-0 bottom-0 right-0 bg-[#03122f81] flex items-center justify-center overflow-y-auto">
                <form action="" className={`
                    flex justify-center items-center 
                    gap-[4.3rem] w-auto h-auto bg-[#031230]
                    rounded-[1.5rem]
                `}>
                    <div className="flex flex-col justify-center items-center w-full h-full p-24 gap-[4.3rem]">
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