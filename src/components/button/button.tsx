import { useNavigate } from 'react-router-dom';
type propsButtonType = {
    title: string,
    stateButton?: boolean,
    route:string
}


export function Button ({title, stateButton=false, route}:propsButtonType) {
    const navigate = useNavigate();

    function goToRouter (whocalled:string) {


        if(whocalled === 'Home') {route = '/'};
        if(whocalled === 'Novo video') {route = '/videonew'};
        
        navigate(`${route}`);
    }
    return(
        <>
            <button className={`
                w-[18rem] h-[5.4rem] rounded-xl border 
                ${stateButton ? `border-blue text-blue shadow-shadow-button` : `border text-white hover:border-blue hover:text-blue hover:shadow-shadow-button`}
            `}
            onClick={()=>goToRouter(title)}>
                {title}
            </button>
        </>
    )
} 