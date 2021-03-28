const medicalReducer = (state= [], action) => {
    let dataB = [...state]
    switch (action.type){
        case "ADDMEDICALDATA":
            if (dataB.indexOf(action.typeOfEmergency)==-1){
                dataB.push(action.typeOfEmergency)
            }
            return dataB;
        case "REMOVEMEDICALDATA":
            dataB.splice(dataB.indexOf(action.typeOfEmergency), 1)
            return dataB
        default:
            return state;

    }
}

export default medicalReducer;