import { createContext, useEffect, useReducer, useState } from "react";
import useAxios from "../hooks/useRequest";
import urlSecundary from "../helper/urlTypes";

export const ContextShedule = createContext();

export const ContextSheduleProvider = ({children}) => {
    const {urlSchedule} = urlSecundary;
    const {datas : dataRequest, isLoading, error, deleteElement, postElement, putElement} = useAxios({url: urlSchedule});
    const datas = dataRequest ? dataRequest.data : dataRequest

    return (
        <ContextShedule.Provider value={{datas, isLoading, error, deleteElement, postElement, putElement}}>
            {children}
        </ContextShedule.Provider>
    )
}