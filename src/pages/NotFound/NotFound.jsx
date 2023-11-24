import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './NotFound.css';
import { SiPrivateinternetaccess } from "react-icons/si";
const NotFound = () => {
    const navigate = useNavigate();
  return (
    <Style.Main>

        <Style.Title>
            <SiPrivateinternetaccess/>
            <h2>Error 404 Not Found!</h2>
            <h3>Ocorreu um erro inesperado!</h3>
            <button onClick={() => navigate('/')}>Voltar</button>
        </Style.Title>
   
    </Style.Main>
  )
}

export default NotFound
