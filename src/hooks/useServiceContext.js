import { useContext } from "react";
import { ContextService } from "../context/ServiceContext";


const useServiceContext = () => {
    const context = useContext(ContextService);
    
    if(!context) console.log("Context não foi encontrado!");

    return context;
}

export default useServiceContext
