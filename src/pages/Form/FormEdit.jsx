import formatMoney from '../../utils/currencyConvert';
import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import useSheduleContext from '../../hooks/useSheduleContext';
import useTimeWorkContext from '../../hooks/useTimeWorkContext';
import useServiceContext from '../../hooks/useServiceContext';
import Message from '../../components/Message/Message';
import ButtonBack from '../../components/Buttons/ButtonBack';
import { icons } from '../../utils/icons';
import * as Style from './FormEdit.css'
import urlSecundary from '../../helper/urlTypes';


const FormEdit = () => {
  const [typeServices, setTypeService] = useState(null);
  const [priceService, setPriceService] = useState(null);
  const [services, setServices] = useState(null);
  const {datas: datasShedule, loading: loadingShedule, error: erroShedule, putElement} = useSheduleContext();
  const {datas: datasTime, loading: loadingTime, error: erroTime} = useTimeWorkContext();
  const {datas: datasService, loading: loadingService, error: erroService}= useServiceContext();
  const {id} = useParams();
  const client = datasShedule && datasShedule.find((client) => client.id.toString() === id);
  const {register, handleSubmit, formState: {errors}} = useForm({defaultValues: client && client});
  const timeShedule = datasShedule && datasShedule.map(getTime => getTime.time);
  const  navigate = useNavigate();
  const [showMessage, setShowMessage] = useState({status: false})
  useEffect(() => {
   const loadDatas = async () => { 
      setPriceService(client.price);
      const _datas = await datasService.filter(elemente => elemente.service !== client.service);
      setTypeService(_datas);
   }

   if(client && datasService) loadDatas();

  }, [client, datasService]);


    if(loadingShedule)  return <Message typeClass ='MessageLoading' typeSVG = {true} info='Carregando...'/>
    if(erroShedule) {
        const {response}  = erroShedule;
        const messageError = `=( ${response.status} - ${response.statusText}`;
        return <Message typeClass = 'MessageError' typeSVG = {false} info = {`Ocorreu um error inesperado! ${messageError}`}/>
    }
    // message of error
    const handleSelect = ({target}) => {
      const _services = datasService && datasService.find( service => service.id === target.value);

      setPriceService(_services.price);
      setServices(_services);
    }

    const checkIfThereUpdate = (inputs, client) => {
      const clientArr = Object.values(client);

      return Object.values(inputs).every((element, index) => element === clientArr[index]);
    }
    const onSubmit = (data) => {
      const {name, time} = data;
      const { price, service } = services ? services : client;
      
      const mergeDatas = {
        id: client.id,
        name,
        time,
        service,
        price,
      };
      
      if(!checkIfThereUpdate(mergeDatas, client)){
        const msgCornfirme = `
          Tem certeza que deseja altera o dados do Cliente?
          Aviso depois de confirmar, as alteraçães não poderam
          ser revertidos!
        `
        if(window.confirm(msgCornfirme)) {
          putElement(mergeDatas, urlSecundary);
          setShowMessage({status: true, data: {typeClass: 'MessageSuccess', typeSVG: false, info: 'Cliente atualizado com sucesso!'}});
          defaultMessage();
        }
      } else {
        window.alert('Você não fez nenhuma alteração!');
        navigate('/');
      }
    }
    const handleReset = () => {
      navigate('/');
    }
    const defaultMessage = () => {
      setTimeout(() => {
        setShowMessage({status: false});
        navigate('/');
      }, [5000]);
    }

  return (
    <Style.FormMain>
      <ButtonBack/>
      <Style.Form onSubmit={handleSubmit(onSubmit)}>


        <div className="field-Style.Form">
          <Style.Fieldset>
            <legend>Edite o Cliente</legend>

            <Style.InputTextContainer>
              <label>
                {icons && icons.FaUserEdit}
                <input
                  type="text" 
                  {...register('name', {required: true})}
                  autoComplete='off'
                />
              </label>
              {errors?.name && <p>Preencha o campo nome é obrigatório!</p>}
            </Style.InputTextContainer>

            <Style.InputSelectContainet>
              <label>
                {icons && icons.TbClock2 }
                <select {...register('time', {required:true})} defaultValue={client && client.time} >
                    <option value={client && client.time} disabled>{client && client.time}</option>
                    {
                      datasTime && datasTime.filter((element) => timeShedule && !timeShedule.includes(element.time))
                                            .map(option =>(
                                              <option key={option.id} value={option.time}>{option.time}</option>
                                            ))
                    }
                </select>
              </label>
              {errors?.time && <p>Selecione um horário!</p>}
            </Style.InputSelectContainet>

            <Style.InputSelectContainet>
              <label>
                {icons && icons.IoIosCut }
                <select {...register('service', {required:true})}
                 defaultValue={client && client.id}
                 onChange={handleSelect}
                >
                <option value={client && client.id} >{client && client.service}</option>
                    {
                      typeServices && typeServices.map((element) => (
                        <option key={element.id}
                         value={element.id}>
                          {element.service}
                        </option>
                      ))
                    }
                </select>
              </label>
              {errors?.service && <p>Selecione um serviço!</p>}
            </Style.InputSelectContainet>

          </Style.Fieldset>

          <Style.OutputContainer>
            <p>Valor Total R$:</p>
            <p>{priceService ? formatMoney.format(priceService) : '0,00'}</p>
          </Style.OutputContainer>

          <Style.ButtonsContainer>
            <button>
              {icons && icons.FaUserEdit}
              Editar
            </button>

            <button type='reset' onClick={handleReset}>
              {icons && icons.MdCancel}
              Cancelar
            </button>
          </Style.ButtonsContainer>

          { showMessage.status && (<Message {...showMessage.data}/>)}

        </div>
      
      </Style.Form>
    </Style.FormMain>
  )
}

export default FormEdit
