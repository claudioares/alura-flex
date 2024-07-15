import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Input } from "./components/input/input";
import { InputSelect } from "./components/inputselect/input.select";
import { Textarea } from "./components/textarea/textarea";

export function VideoNew () {
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

                <form action="" className="w-full px-[9.4rem] flex flex-col gap-[6rem]" >
                    <div className="flex items-center w-full h-[9.1rem] border-y-2 border-whitepro ">
                        <h1 className="text-whitepro font-semibold text-[3.6rem]">Criar Card</h1>
                    </div>
                    <div className="w-full h-auto flex gap-[2rem]">
                        <div className="w-full h-auto">
                            <Input placeholder="Entre com um titulo" title="Título"/>
                        </div>
                        <InputSelect title="Categoria"/>
                    </div>
                    <div className="w-full h-auto flex gap-[2rem]">
                        <div className="w-full h-auto">
                            <Input placeholder="O link é obrigatório" title="Instagram"/>
                        </div>
                        <div className="w-full h-auto">
                            <Input placeholder="Digite o link do video" title="Video"/>
                        </div>
                    </div>
                    <div className="w-full h-auto">
                        <Textarea title="Descrição" placeholder="Sobre o que é esse video?"/>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}