import React from 'react';
import * as Style from './ListClient.css';
import { FaUserEdit } from "react-icons/fa";
import { TiUserDeleteOutline } from "react-icons/ti";



const ListClient = ({datas}) => {
    const {name, time, service, price} = datas;

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

                <button>
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
