import logo from '../../assets/logo.svg'
import { Button } from '../button/button'

export function Header () {
    return(
        <>
            <header className={`
                flex items-center justify-between py-[5.1rem] px-[3.5rem]
                h-[125px] w-full bg-darkgray
            `}>
                <img src={logo} alt="Logo da alura flix" className='h-[4rem]'/>
                <div className='w-full flex items-center justify-end gap-[2.5rem]'>
                    <Button stateButton={true} title={'Home'} />
                    <Button title={'Novo video'} />
                </div>
            </header>
        </>
    )
}