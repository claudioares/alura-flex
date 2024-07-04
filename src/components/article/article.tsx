import player from '../../assets/player.svg';

export function Article () {
    return(
        <>
            <article id="article__home" className="w-full h-[83.2rem] flex items-center justify-centera px-[4.3rem]">
                <section className="w-[50%] flex flex-col gap-[4rem]">
                    <button className='w-[29.6rem] h-[9.2rem] bg-frontend font-extrabold text-5xl text-white'>FRONT END</button>
                    <div  className='text-white flex flex-col gap-[0.9rem]'>
                        <h1 className='font-light text-7xl'>SEO com React</h1>
                        <p className='font-light text-4xl'>
                            Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no 
                            desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer 
                            uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito
                            com todo o carinho do mundo construindo uma "Pokedex"! 
                        </p>
                    </div>
                </section>
                <section className="w-[50%] h-full flex items-center justify-center">
                    <div className='w-[64.6rem] h-[33.3rem] border border-blue shadow-inner'>
                        <img src={player} alt="Image do dev coutinho" className='w-full h-full object-cover'/>
                    </div>
                </section>
            </article>
        </>
    )
}