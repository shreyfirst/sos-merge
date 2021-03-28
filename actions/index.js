export const addMedicalData = (typeOfEmergency) => {
    return{
        type: "ADDMEDICALDATA", 
        typeOfEmergency: typeOfEmergency
    }
}

export const addPoliceData = (typeOfEmergency) => {
    return{
        type: "ADDPOLICEDATA",
        typeOfEmergency: typeOfEmergency
    }
}

export const addFireData = (typeOfEmergency) => {
    return{
        type: "ADDFIREDATA",
        typeOfEmergency: typeOfEmergency
    }
}

export const removeMedicalData = (typeOfEmergency) => {
    return{
        type: "REMOVEMEDICALDATA",
        typeOfEmergency: typeOfEmergency
    }

}

export const removePoliceData = (typeOfEmergency) => {
    return{
        type: "REMOVEPOLICEDATA",
        typeOfEmergency: typeOfEmergency
    }
}

export const removeFireData = (typeOfEmergency) => {
    return{
        type: "REMOVEFIREDATA",
        typeOfEmergency: typeOfEmergency
    }
}