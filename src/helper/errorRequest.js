
export const typeError = {
    SHEDULE: 'shedule',
    TIMEOFWORK: 'timeofwork',
    SERVICES: 'services'
}

export const configError = {
    typeClass: 'MessageError',
    typeSVG: false,
    info: '',
}

export const checkError = (error, ...typesErrors) => {
    let {info} = configError;
    info = `Ocorreu um error inesperado (${error.message})` ;
    typesErrors.forEach(type => {
        if(type === typeError.SHEDULE) {
            info += ` - Shedule `;
        }
        if(type === typeError.TIMEOFWORK) {
            info += ` - TimeWork `
        }
        if(type === typeError.SERVICES) {
            info += ` - Service  `
        }
    })

    return {...configError, info};
}
