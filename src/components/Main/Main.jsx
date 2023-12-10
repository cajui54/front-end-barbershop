import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './Main.css'
import ListClient from './ListClient';
import {checkError, typeError} from '../../helper/errorRequest';
import { IoTimer } from "react-icons/io5";
import Message from '../Message/Message';
import useSheduleContext from '../../hooks/useSheduleContext';

const Main = () => {

  const {datas , isLoading, error} = useSheduleContext();
  const navegation = useNavigate();
  
  const handleNavegate = () => {
    navegation('/register');
  }

  if(error) {
    const configs = checkError(error, typeError.SHEDULE);
    return <Message {...configs}/>
  }

  return (
    <Style.Main>

      <Style.Subtitle>Gerenciar Clientes</Style.Subtitle>

      <div>
        <h3>Horários Marcados</h3>
        
        <Style.ButtonNewTime>
          <button onClick={handleNavegate}>
            <IoTimer />
            Marcar Horário
          </button>
        </Style.ButtonNewTime>
        
        <Style.GridList>
          {
            datas && datas.map((cliente) => (
              <ListClient key={cliente.id}
                data={cliente}
                loading={isLoading}
              />
            ))
          }
        </Style.GridList>
        
      </div>

    </Style.Main>
  )
}

export default Main
