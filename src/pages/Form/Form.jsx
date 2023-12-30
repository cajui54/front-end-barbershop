import * as Style from './Form.css';
import {useForm} from 'react-hook-form';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useSheduleContext from '../../hooks/useSheduleContext';
import useTimeWorkContext from '../../hooks/useTimeWorkContext';
import useServiceContext from '../../hooks/useServiceContext';
import { AiTwotoneSchedule, AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import Message from '../../components/Message/Message';
import {checkError, typeError} from '../../helper/errorRequest';
import formatMoney from '../../utils/currencyConvert';
import urlSecundary from '../../helper/urlTypes';
import ButtonBack from '../../components/Buttons/ButtonBack';

const Form = () => {
    
    const {urlSchedule} = urlSecundary;
    const {datas : times, isLoading: loadingTime, error: errorTime} = useTimeWorkContext();
    const {datas: services, isLoading: loadingServide, error: errorService} = useServiceContext();
    const {datas: shedule, postElement} = useSheduleContext(); 
    const getOnlyTime = shedule && shedule.map(({time}) => time);
    const navegation = useNavigate();
    const [serviceDatas, setServiceDatas] = useState(null);
    const message = {typeClass: 'MessageSuccess', typeSVG: false, info: 'Horário marcado com sucesso!'}
    let [messageError, setErrorMessage] = useState({status: false})
    
    const {register, handleSubmit, formState: {errors}, resetField} = useForm({defaultValues: {time: '0', service: '0'}});
    const [statusSend, setStatusSend] = useState(false);
    const handleBackToHome = () => navegation('/');
    

    if(loadingTime || loadingServide)  return <Message typeClass ='MessageLoading' typeSVG = {true} info='Carregando...'/>

    if(errorTime || errorService) {
        const { SERVICES,TIMEOFWORK} = typeError
        const objeError = errorService ? errorService : errorTime;
        const config  = checkError(objeError, SERVICES, TIMEOFWORK);

        return (
            <>
            <button className='btnClose' onClick={handleBackToHome}>
                    <FaRegWindowClose />    
            </button>
                <Message {...config} />
            </>
        )  
    }

    const setDefaultFields = () => {
        setStatusSend(true);
        setTimeout(() => setStatusSend(false) ,3000);
        resetField("name");
        resetField("time");
        resetField("service");
        setServiceDatas(null);
    }

    const onSubmit = async (data) => {
        const {service, price} = serviceDatas;
        const datas = {...data, service, price};
        const message = `
            Tem certeza que deseja Marcar Horário para:\n
            ${datas.name} no Horário ${datas.time}, tipo de serviço: ${datas.service}, no valor de ${datas.price} ?
        `   
     if(window.confirm(message)) {
        if(await postElement(datas, urlSchedule) === 201) {
            setDefaultFields();
            setErrorMessage({status: false});
        } else {
            setErrorMessage({typeClass: 'MessageError', typeSVG: false, info: `Error 404 no servidor!`, status: true});
        }
     }
     
    }
    const handleSelect = (e) => {
        const service = services?.find(service => service.id === e.target.value);

        setServiceDatas(service);
    }
    const handleReset = () => {
        setServiceDatas(null);
    }
  return (
    <Style.FormContainer>

        <ButtonBack/>
        
        <Style.Form onSubmit={(e) => e.preventDefault()}>
            <Style.LogoInfo>
                <AiTwotoneSchedule />
                <h2>Agendar</h2>
                <h3>Novo Horário</h3>
            </Style.LogoInfo>

            <Style.InputContainer>
                <label>
                    <div>
                        <p>Nome:</p>
                        <input
                            type="text"
                            {...register("name", {required: true})}
                        />
                    </div>
                    
                   {errors?.name?.type === 'required' && <p className='error-message'>Nome é obrigatório!</p>}
                </label>

                <Style.SelectContainer>

                    <label>
                        <div>
                            <p>Horários</p>

                            <select {...register("time", {validate: (value) => {
                                    return value !== "0"
                                }})} 
                                defaultValue={'0'}
                            >
                                <option disabled="disabled" value='0' >Selecione</option>
                                {
                                    times && times.filter(({time}) => !getOnlyTime?.includes(time))
                                                .map(({id, time}) =>(
                                                        <option key={id} value={time}>
                                                            {time}
                                                        </option>
                                            )) 
                                }
                            </select>
                        </div>
                        {errors?.time?.type === 'validate' && <p className='error-message'>Selecione um horário!</p>}
                    </label>

                    <label>
                        <div>
                            <p>Serviços</p>
                            <select {...register('service', {validate: (value) => {
                                    return value !== '0';
                                }})}
                                defaultValue={'0'}
                                onChange = {handleSelect}
                            >

                            <option disabled="disabled" value='0'>Selecione</option>
                                {
                                    services && services.map(({id, service}) => (
                                        <option key={id} value={id}>{service}</option>
                                    ))
                                }
                            </select>
                        </div>

                        {errors?.service?.type === 'validate' && <p className='error-message'>Selecione um serviço</p>}

                    </label>

                </Style.SelectContainer>

                <Style.ResultsContainer>
                    <p>Valor Total R$:</p>
                    <p>{serviceDatas ? formatMoney.format(serviceDatas.price) : 'R$0.00'}</p>
                </Style.ResultsContainer>
                
            </Style.InputContainer>
            
            <Style.ButtonsContainer>
                <button onClick={() => handleSubmit(onSubmit)()} >
                    <AiOutlineSchedule />
                    Confirmar
                </button>

                <button type='reset' onClick={handleReset}>
                    <MdOutlineCancelScheduleSend />
                    Cancelar
                </button>
            </Style.ButtonsContainer>
            {statusSend && <Message {...message}/>}
            {messageError.status && <Message {...messageError}/>}
        </Style.Form>

    </Style.FormContainer>
  )
}

export default Form
