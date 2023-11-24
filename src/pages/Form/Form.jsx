import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Style from './Form.css';
import { AiTwotoneSchedule } from "react-icons/ai";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdOutlineCancelScheduleSend } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";


const Form = () => {
    const navegation = useNavigate();

    const handleBackToHome = () => {
        navegation('/');
    }

  return (
    <Style.FormContainer>
        <button className='btnCloseForm' onClick={handleBackToHome}>
            <FaRegWindowClose />
        </button>

        <Style.Form>

            <Style.LogoInfo>
                <AiTwotoneSchedule />
                <h2>Agendar</h2>
                <h3>Novo Horário</h3>
            </Style.LogoInfo>

            <Style.InputContainer>
                <label>
                    <p>Nome:</p>
                    <input type="text" required name='name'/>
                </label>

                <Style.SelectContainer>

                    <label>
                        <p>Horários</p>
                        <select name="time">
                            <option value="10:00">10:00</option>
                            <option value="10:00">10:00</option>
                            <option value="10:00">10:00</option>
                        </select>
                    </label>

                    <label>
                        <p>Serviços</p>
                        <select name="type">
                            <option value="Barba">Barba</option>
                            <option value="Corte + Alizante">Corte + Alizante</option>
                            <option value="Corte + Barba + Alizante">Corte + Barba + Alizante</option>
                        </select>
                    </label>

                </Style.SelectContainer>

                <Style.ResultsContainer>
                    <p>Valor Total R$:</p>
                    <p>R$70.00</p>
                </Style.ResultsContainer>
                
            </Style.InputContainer>
            
            <Style.ButtonsContainer>
                <button>
                    <AiOutlineSchedule />
                    Confirmar
                </button>

                <button type='reset'>
                    <MdOutlineCancelScheduleSend />
                    Cancelar
                </button>
            </Style.ButtonsContainer>
        </Style.Form>

    </Style.FormContainer>
  )
}

export default Form
