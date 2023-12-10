import axiosInstance from '../helper/axiosIntance';
import { useState, useEffect, useRef } from 'react';

const useAxios = ({url, config = {}}) => {
    const [callFetch, setCallFetch] = useState(false);
    const [datas, setDatas] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const effectRun = useRef(false);
    
    
    const deleteElement = async (url, method) => {
        try {
            const response = await axiosInstance[method](url);
            setCallFetch(true);
        } catch (error) {
            window.alert(`
                Ocorreu um erro inesperado! 
                ${error}
            `
            );
        }
    }

    const postElement = async (_datas, urlSecundary ) => {
        try {
            
            const response = await axiosInstance.post(urlSecundary, _datas);

            setCallFetch(true);
            console.log(response);
            return 201;

        } catch (error) {
            window.alert('Ocorreu um error inesperado! \n '+ error);
            return error;
        }
    }

    useEffect(() => {
        const controller = new AbortController();
        const requestDatas = async () => {
            
            try {  
                const response = await axiosInstance.get(url, config);
                setDatas(response);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
                setCallFetch(false);   
            }
            
        }
        
        if(effectRun.current) requestDatas(callFetch);

        return () => {
            controller.abort();
            effectRun.current = true;
        }
        
    }, [callFetch]);

    
    return {datas, isLoading, error, deleteElement, postElement};
}

export default useAxios;