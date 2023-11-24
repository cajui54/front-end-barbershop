import {useEffect, useState} from 'react';
import { GiBearHead } from "react-icons/gi";

import * as Style from './Header.css';

const Header = () => {
    const date = new Date();
    const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes()
    });

    const convertWeekToPT = (dayWeek) => {
        switch(dayWeek) {
            case 'Mon':
                return 'Segunda'
            case 'Tue' :
                return 'Terça'
            case 'Wed' :
                return 'Quarta'
            case 'Thu' :
                return 'Quinta'
            case 'Fri' :
                return 'Sexta'
            case 'Sat' :
                return 'Sábado'
            case 'Sun' :
                return 'Domingo'
            default :
                return 'Error!'
            
        }
    }

    const checklengthMinutes = (minutes) => {
        if(minutes < 10) return `0${minutes}`;
        else return minutes;
    }

    const [weekDay, month, day, year] = date.toDateString().split(' ');
    
  return (
    <Style.Header>

      <Style.LogoContainer>
        <GiBearHead />
        <h2>New Style</h2>
        <h3>Barbearia</h3>
      </Style.LogoContainer>

      <Style.TimeContainer>
        {time && <span>{time.hours}:{checklengthMinutes(time.minutes)}</span>}
        <div>
            <span>{convertWeekToPT(weekDay)}</span>
            <span>{day} de</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
      </Style.TimeContainer>
    </Style.Header>
  )
}

export default Header
