import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";
import * as Style from './ButtonBack.css';

const ButtonBack = () => {
    const navegateTo = useNavigate();
  return (
    <div>
        <Style.ButtonClose className='btnCloseForm' onClick={() => navegateTo('/')}>
            <FaRegWindowClose />
        </Style.ButtonClose>
    </div>
  )
}

export default ButtonBack
