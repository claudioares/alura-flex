import { useNavigate } from 'react-router-dom';
type propsButtonType = {
    title: string,
    stateButton?: boolean,
    route:string,
    type?: "submit" | "reset" | "button" | undefined,
    func?: any
}


export function Button ({title, stateButton=false, route, type=undefined, func}:propsButtonType) {
    const navigate = useNavigate();

    function goToRouter (whocalled:string) {


        if(whocalled === 'Home') {route = '/'};
        if(whocalled === 'Novo video') {route = '/videonew'};
        
        navigate(`${route}`);
    }
    return(
        <>
            {route ? <button 
                className={`
                    w-[18rem] h-[5.4rem] rounded-xl border 
                    ${stateButton ? `border-blue text-blue shadow-shadow-button` : `border text-white hover:border-blue hover:text-blue hover:shadow-shadow-button`}
                `}
                type={type}
                onClick={()=>goToRouter(title)}
            >
                {title}
            </button>
            :
            func ? <button 
                className={`
                    w-[18rem] h-[5.4rem] rounded-xl border 
                    ${stateButton ? `border-blue text-blue shadow-shadow-button` : `border text-white hover:border-blue hover:text-blue hover:shadow-shadow-button`}
                `}
                type={type}
                onClick={()=>func()}
            >
                {title}
            </button>
            :
            <button 
                className={`
                    w-[18rem] h-[5.4rem] rounded-xl border 
                    ${stateButton ? `border-blue text-blue shadow-shadow-button` : `border text-white hover:border-blue hover:text-blue hover:shadow-shadow-button`}
                `}
                type={type}
            >
                {title}
            </button>}
        </>
    )
} 