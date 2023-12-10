import { createContext, useState } from "react";
import useAxios from "../hooks/useRequest";
import urlSecundary from "../helper/urlTypes";

export const ContextService = createContext();

export const ContextServiceProvider = ({children}) => {
    const {urlTypeService} = urlSecundary;
    const {datas: dataRequest, isLoading, error} = useAxios({url: urlTypeService});
    
    const datas = dataRequest && dataRequest.data;
    
    return (
        <ContextService.Provider value={{datas, isLoading, error}}>
            {children}
        </ContextService.Provider>
    )
}