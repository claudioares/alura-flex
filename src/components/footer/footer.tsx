import logo from '../../assets/logo.svg';

export function Footer () {
    return(
        <>
          <div className="w-full h-[12.5rem] flex items-center justify-center bg-black">
            <img src={logo} alt="Logo da alura flix" />
          </div>
        </>
    )
}