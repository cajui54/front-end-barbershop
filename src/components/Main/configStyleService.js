const addZeroInTime = (time) => {
    if(time > 9) return time;
    return `0${time}`
}
const timeNow = new Date();
const hours = timeNow.getHours();
const minutes = timeNow.getMinutes();

export const defaultStyle = {
    styled: '',
    status: false,
    textButton: 'Finalizar',
    showTime: false,
    textButtonStart: 'Iniciar',
    statusLoad: false,
    btnLoadClass: ''
}
export const finishStyle = {
    styled: 'serviceFinish', 
    status: true, 
    textButton: 'Finalizado', 
    showTime: true, 
    nowTime: `${addZeroInTime(hours)}:${addZeroInTime(minutes)}`,
    textButtonStart: 'Iniciar',
    running: false,
    btnLoadClass: ''
}
export const startStyle = {
    styled: 'loadingService',
    status: false,
    textButton: 'Finalizar',
    showTime: false,
    textButtonStart: 'Cortando...',
    statusLoad: true,
    btnLoadClass: 'btnLoadClass'
}
