import {useReducer} from 'react';
import { defaultStyle, finishStyle, startStyle } from '../components/Main/configStyleService';

const reducer = (state, {type}) => {
    
        switch(type) {
            case 'default' :
                return defaultStyle;
            case 'finish' :
                return finishStyle;
            case 'running':
                return startStyle;
            default :
                return defaultStyle;
        }
    
}
const useStyledTime = () => {
    const [styledReducer, dispatchStyled] = useReducer(reducer, defaultStyle);

    return {styledReducer, dispatchStyled}
}

export default useStyledTime
