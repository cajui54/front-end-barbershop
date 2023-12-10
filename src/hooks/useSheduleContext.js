import {useContext} from 'react';
import { ContextShedule } from '../context/SheduleContext';

const useSheduleContext = () => {
    const context = useContext(ContextShedule);

    if(!context) console.log("Context não encontrado!");

    return context;
}

export default useSheduleContext;