import logo from '../../assets/logo.svg'
import { Button } from '../button/button'


type PropsHeaderType = {
    callPrps:string;
}

export function Header ({callPrps}:PropsHeaderType) {
    return(
        <>
            <header className={`
                flex items-center justify-between py-[5.1rem] px-[3.5rem]
                h-[125px] w-full ${callPrps==='/' ? 'bg-darkgray' : 'bg-black'}
            `}>
                <img src={logo} alt="Logo da alura flix" className='h-[4rem]'/>
                <div className='w-full flex items-center justify-end gap-[2.5rem]'>
                    <Button route={callPrps} stateButton={callPrps==='/' && true} title={'Home'} />
                    <Button route={callPrps} stateButton={callPrps==='/videonew' && true} title={'Novo video'} />
                </div>
            </header>
        </>
    )
}