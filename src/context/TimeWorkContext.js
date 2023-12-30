import { createContext} from "react";
import useAxios from "../hooks/useRequest";
import urlSecundary from "../helper/urlTypes";

export const ContextTimeWork = createContext();

export const ContextTimeWorkProvider = ({children}) => {
    const {urlTimeWork} = urlSecundary;
    let {datas, isLoading, error} = useAxios({url: urlTimeWork});
    datas = datas ? datas.data : datas;
    
    return (
        <ContextTimeWork.Provider value={{datas, isLoading, error}}>
            {children}
        </ContextTimeWork.Provider>
    )
}