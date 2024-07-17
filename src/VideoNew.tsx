import { FormEvent, useContext } from "react";
import { Button } from "./components/button/button";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Input } from "./components/input/input";
import { InputSelect } from "./components/inputselect/input.select";
import { Textarea } from "./components/textarea/textarea";
import { apiMongoDB } from "./service/api";
import { ContextApi } from "./contextApi/contextApi";

export function VideoNew () {

    const {
        // armazena os inputs
        title, setTitle, categorie, setCategorie,
        image, setImage, video, setVideo, description, setDescription,
    } = useContext(ContextApi)


    function handleCleanForm () {
        setTitle('');
        setCategorie('');
        setImage('');
        setVideo('');
        setDescription('')
    }

    async function handleSubmit (e:FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(!title){
            console.log("Titulo nescesario");
            return
        }
        if(!categorie){
            console.log("categoria nescesario");
            return;
        }
        if(!image){
            console.log("imagem nescesario");
            return;
        }
        if(!video){
            console.log("video nescesario");
            return;
        }

        
        if(categorie === 'frontend'){
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

        if(categorie === 'backend'){
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

        if(categorie === 'mobile'){
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
            <Header callPrps="/videonew" />

                <div className="w-full h-auto bg-darkgray py-[7rem]">
                    <section className={`
                        w-full h-auto pt-[7.1rem] pb-[4.7rem]
                        flex flex-col items-center justify-center
                    `}>
                        <h1 className="text-whitepro font-black text-[6rem]">NOVO VIDEO</h1>
                        <p className="text-whitepro font-medium text=[2rem]">Complete o formulário para criar um novo card de vídeo.</p>
                    </section>

                    <form  onSubmit={handleSubmit} action="" className="w-full px-[9.4rem] flex flex-col gap-[6rem]" >
                        <div className="flex items-center w-full h-[9.1rem] border-y-2 border-whitepro ">
                            <h1 className="text-whitepro font-semibold text-[3.6rem]">Criar Card</h1>
                        </div>
                        <div className="w-full h-auto flex gap-[2rem]">
                            <div className="w-full h-auto">
                                <Input 
                                    placeholder="Entre com um titulo" 
                                    title="Título"
                                    value={title}
                                    func={setTitle}
                                />
                            </div>
                            <InputSelect 
                                title="Categoria"
                                value={categorie}
                                func={setCategorie}
                            />
                        </div>
                        <div className="w-full h-auto flex gap-[2rem]">
                            <div className="w-full h-auto">
                                <Input 
                                    placeholder="O link é obrigatório" 
                                    title="Imagem"
                                    value={image}
                                    func={setImage}
                                />
                            </div>
                            <div className="w-full h-auto">
                                <Input 
                                    placeholder="Digite o link do video" 
                                    title="Video"
                                    value={video}
                                    func={setVideo}
                                />
                            </div>
                        </div>
                        <div className="w-full h-auto">
                            <Textarea 
                                title="Descrição" 
                                placeholder="Sobre o que é esse video?"
                                value={description}
                                func={setDescription}
                            />
                        </div>

                        <div className="w-full flex gap-6">
                            <Button type="submit" title={"Guardar"} route={""} />
                            <Button title={"Limpar"} route={""} func={handleCleanForm}/>
                        </div>
                    </form>

                </div>

            <Footer />
        </>
    )
}