const policeReducer = (state= [], action) => {
    let dataB = [...state]
    switch (action.type){
        case "ADDPOLICEDATA":
            if (dataB.indexOf(action.typeOfEmergency)==-1){
                dataB.push(action.typeOfEmergency)
            }
            return dataB;
        case "REMOVEPOLICEDATA":
            dataB.splice(dataB.indexOf(action.typeOfEmergency), 1)
            return dataB
        default:
            return state;
    }
}

export default policeReducer;