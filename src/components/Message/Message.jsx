import React from 'react';
import * as Style from './Message.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";


const Message = ({typeClass, typeSVG, info}) => {
    //const message = {typeClass: 'MessageLoading', typeSVG: true, info: 'Carregando'}
    //const message = {typeClass: 'MessageError', typeSVG: false, info: 'Ocorreu um error inesperado!'}
    //const message = {typeClass: 'MessageSuccess', typeSVG: false, info: 'Horário marcado com sucesso!'}
  return (
    <Style.Message>
        <div className={typeClass}>
            { typeSVG &&<AiOutlineLoading3Quarters />}
            <span>{info}</span>
      </div>
    </Style.Message>
  )
}

export default Message
