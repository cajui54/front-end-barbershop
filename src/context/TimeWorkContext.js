import { createContext} from "react";
import useAxios from "../hooks/useRequest";
import urlSecundary from "../helper/urlTypes";

export const ContextTimeWork = createContext();

export const ContextTimeWorkProvider = ({children}) => {
    const {urlTimeWork} = urlSecundary;
    const {datas, isLoading, error} = useAxios({url: urlTimeWork});
    const getDatas = datas ? datas.data : datas;
    
    return (
        <ContextTimeWork.Provider value={{getDatas, isLoading, error}}>
            {children}
        </ContextTimeWork.Provider>
    )
}