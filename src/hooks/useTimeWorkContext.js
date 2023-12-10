import { useContext } from "react";
import { ContextTimeWork } from "../context/TimeWorkContext";

const useTimeWorkContext = () => {
    const context = useContext(ContextTimeWork);

    if(!context) console.log('Context não foi encontrado!');

    return context;
}

export default useTimeWorkContext;