import iconDel from '../../assets/icons/del.svg';
import iconEdit from '../../assets/icons/edit.svg';

type propsSectionType = {
    img: string
}

export function Card ({img}:propsSectionType) {
    return(
        <div className={`
            flex flex-col gap-14
        `}>
            <section className="w-[43.2rem] h-[32.5rem] flex flex-col items-center justify-center rounded-3xl">
                <div className="w-full h-full">
                    <img src={img} alt="" className="w-full h-full object-cover"/>
                </div>
                <footer className="w-full h-[5.9rem] bg-black text-white flex items-center justify-between px-8">
                    <div className="flex items-center justify-center gap-4">
                        <img src={iconDel} alt="Icone de lixeira" />
                        <p>Deletar</p>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <img src={iconEdit} alt="Icone de edição" />
                        <p>Deletar</p>
                    </div>
                </footer>
            </section>
        </div>
    )
}