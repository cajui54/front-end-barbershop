import React from 'react';
import * as Style from './InfoData.css';
import { TiScissorsOutline } from "react-icons/ti";
import { MdOutlineAttachMoney } from "react-icons/md";



const InfoData = () => {
  return (
    <Style.InfoData>
      <h2>Informações Gerais:</h2>

      <Style.Card>

        <Style.CardInfo>
            <h6>Clientes</h6>

            <div>
                <TiScissorsOutline/>
                <Style.CardResults>
                    <div className='resultContainer'>
                        <p>
                            <span>10</span> 
                            <span>Marcados</span>
                        </p>
                        <span className='bar'>/</span>
                        <p>
                            <span>10</span>
                            <span>vagas</span>
                        </p>
                        
                    </div>   
                </Style.CardResults>
            </div>
        </Style.CardInfo>

        <Style.CardInfo>
            <h6>Faturamento</h6>

            <div>
            <MdOutlineAttachMoney />

                <Style.CardResults>
                    <p><span>R$:100.00</span> Atual</p>
                    <p><span>R$:1000.00</span> previsto</p>
                </Style.CardResults>
            </div>
        </Style.CardInfo>

        
      </Style.Card>
    </Style.InfoData>
  )
}

export default InfoData
