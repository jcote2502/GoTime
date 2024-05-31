import { ClientHero } from "../components/frames";
import clients from "../data/clientele";

const Clientele = () => {
    
    return(
        <>
            <div className="clnt-wrap">
                {clients.map((client)=>(
                    <ClientHero client={client}/>
                ))}
            </div>
        </>
    )
}

export default Clientele;