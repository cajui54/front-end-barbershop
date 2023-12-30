import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSheduleContext from '../../hooks/useSheduleContext';
import urlSecundary from '../../helper/urlTypes';
import * as Style from './ListClient.css';
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";
import { FaUserCheck } from "react-icons/fa";
import { BsScissors } from "react-icons/bs";
import Message from '../Message/Message';
import useStyledTime from '../../hooks/useStyledTime';
import { useDispatch } from 'react-redux';
import { invoicingCurrent, subtriateCurrent, getIds } from '../../store/slice/sliceSchedule';
const ListClient = ({data, loading}) => {
  const { styledReducer, dispatchStyled } = useStyledTime();
  
  const navigate = useNavigate();
  const {urlSchedule} = urlSecundary;
  const { deleteElement } = useSheduleContext();
  const [styleType] = useState({default: 'default', finish: 'finish', running: 'running'});
  const dispatch = useDispatch();

  if(loading) return <Message typeClass ='MessageLoading' typeSVG = {true} info='Carregando'/>

        
    const {id, name, time, service, price} = data;

    const handleDelete = (id) => {
      if(window.confirm('Tem certeza que deseja excluir esse cliente?')) {
        const url = `${urlSchedule}/${id}`;
        deleteElement(url, 'delete');
      }
      
    }
    const settingServiceTime = ({id, price}) => {
      
      if(!styledReducer.status) {
        dispatchStyled({type: styleType.finish});
        dispatch(invoicingCurrent({id, price}));
      } else {
        dispatchStyled({type: styleType.default});
        dispatch(subtriateCurrent({id, price}));
      }
    }
    const handleFinishService = (datas) => {
      settingServiceTime(datas);
      
    }
    
    const handleLoadingService = () => {
      if(!styledReducer.statusLoad) {
        dispatchStyled({type: styleType.running});
      } else {
        dispatchStyled({type: styleType.default});
      }
    } 
    
  return (
    <Style.ListClient>
      <dl className={styledReducer.styled}>
          <Style.ListDT>

            <span>{name}</span>
            
            <div>
    
                <button onClick={() => navigate(`edit/${id}`)}>
                    <FaUserEdit />
                    Editar
                </button>

                <button onClick={() => handleDelete(id)}>
                    <TiUserDeleteOutline />
                    Deletar
                </button>
            </div>
            
          </Style.ListDT>

          <Style.ListDD>

            <p>
              <span className='lable'>Horário:</span>
              <span className='timeContainer'>
                <button className={styledReducer.btnLoadClass} onClick={handleLoadingService}>
                  <BsScissors />
                  {styledReducer.textButtonStart}
                </button>
                <span className='output'>{time}</span>
              </span>
            </p>

            <p>
              <span className='lable'>Serviço:</span>
              <span className='output'>{service}</span>
            </p>

            <p>
              <span className='lable'>Total:</span>
              <span className='output'>R$:{price.toFixed(2)}</span>
            </p>

            <Style.MenuButtons>
              <li>
                <button onClick={() => handleFinishService(data)}>
                  <FaUserCheck />
                  <span>{styledReducer.textButton}</span>
                </button>
              </li>

        
              {
                styledReducer.showTime && (
                  <li className='container-service-time'>
                    <span>Serviço foi Finalizado as: </span>
                    <span>{styledReducer.nowTime}</span>
                  </li>
                )
              }
       
            </Style.MenuButtons>
          </Style.ListDD>
        </dl>
    </Style.ListClient>
  )
}

export default ListClient
