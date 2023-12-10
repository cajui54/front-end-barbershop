import React from 'react';
import useSheduleContext from '../../hooks/useSheduleContext';
import urlSecundary from '../../helper/urlTypes';
import * as Style from './ListClient.css';
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";
import Message from '../Message/Message';


const ListClient = ({data, loading}) => {
  const {urlSchedule} = urlSecundary;
  const { deleteElement } = useSheduleContext();
  
  if(loading) return <Message typeClass ='MessageLoading' typeSVG = {true} info='Carregando'/>

    
    const {id, name, time, service, price} = data;

    const handleDelete = (id) => {
      if(window.confirm('Tem certeza que deseja excluir esse cliente?')) {
        const url = `${urlSchedule}/${id}`;
        deleteElement(url, 'delete');
      }
      
    }

  return (
    <Style.ListClient>
      <dl>
          <Style.ListDT>
            <span>{name}</span>

            <div>
                <button>
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
              <span className='output'>{time}</span>
            </p>

            <p>
              <span className='lable'>Serviço:</span>
              <span className='output'>{service}</span>
            </p>

            <p>
              <span className='lable'>Total:</span>
              <span className='output'>R$:{price.toFixed(2)}</span>
            </p>

          </Style.ListDD>
        </dl>
    </Style.ListClient>
  )
}

export default ListClient
