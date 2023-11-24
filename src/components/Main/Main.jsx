import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './Main.css'
import ListClient from './ListClient';
import { IoTimer } from "react-icons/io5";

const Main = () => {
  const navegation = useNavigate();
  const clientDatas = {
    name: 'João Gomes',
    time: '10:30',
    service: 'Barba + Cabelo',
    price: 70.00
  }

  const handleNavegate = () => {
    navegation('/register');
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
          <ListClient datas={clientDatas}/>
          <ListClient datas={clientDatas}/>
          <ListClient datas={clientDatas}/>
        </Style.GridList>
        
      </div>

    </Style.Main>
  )
}

export default Main
