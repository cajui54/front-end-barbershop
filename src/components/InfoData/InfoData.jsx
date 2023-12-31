import * as Style from './InfoData.css';
import { TiScissorsOutline } from "react-icons/ti";
import { MdOutlineAttachMoney } from "react-icons/md";
import Message from '../Message/Message';
import formatMoney from '../../utils/currencyConvert';
import { checkError, typeError } from '../../helper/errorRequest';
import {useSelector} from 'react-redux';
//Request
import useSheduleContext from '../../hooks/useSheduleContext';
import useTimeWorkContext from '../../hooks/useTimeWorkContext';

const InfoData = () => {
    const {datas: sheduleData, isLoading: loadingShedule, error: errorShedule} = useSheduleContext(); 
    const {datas: dataTimeWork, isLoading: loadingTime, error: errorTime} = useTimeWorkContext();
    const invoicing = useSelector(({reducerSchedule}) => reducerSchedule); 
    const addZero = (number) => {
        if(number < 10) return `0${number}`;
        return number;
    }

    if(errorShedule || errorTime) {
        const {SHEDULE ,TIMEOFWORK} = typeError
        const objeError = errorShedule ? errorShedule : errorTime;
        const config  = checkError(objeError, SHEDULE, TIMEOFWORK);
        return <Message {...config} />
    }

    if(loadingShedule || loadingTime) {
        return <Message typeClass ='MessageLoading' typeSVG = {true} info='Carregando'/>
    }

  return (
    
    <Style.InfoData>
      <h2>Informações Gerais:</h2>

      <Style.Card>

        <Style.CardInfo>
            <h6>Clientes</h6>
    
            <div>
                <TiScissorsOutline/>
                <Style.CardResults>
                    <div className='resultContainer'>
                        <p>
                            <span>
                                {
                                    sheduleData && addZero(sheduleData.length)
                                }
                            </span> 
                            <span>Marcados</span>
                        </p>
                        <span className='bar'>/</span>
                        <p>
                            <span>
                                {
                                    dataTimeWork && dataTimeWork.length - sheduleData.length
                                }
                            </span>
                            <span>vagas</span>
                        </p>
                            
                    </div>   
                </Style.CardResults>
            </div>

        </Style.CardInfo>

        <Style.CardInfo>
            <h6>Faturamento</h6>
    
            <div>
                <MdOutlineAttachMoney />
    
                <Style.CardResults>
                    <p>
                        <span>
                            {formatMoney.format(invoicing.currency)}  
                        </span>
                         Atual
                    </p>

                    <p>
                        <span>
                            { sheduleData && formatMoney.format(sheduleData.reduce((acc,curr) => acc + curr.price, 0))}
                        </span>
                        previsto
                    </p>

                </Style.CardResults>
            </div>
        </Style.CardInfo>
      </Style.Card>
    </Style.InfoData>
  )
}

export default InfoData
