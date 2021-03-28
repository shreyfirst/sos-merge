const otherReducer = (state= [], action) => {
    let dataB = [...state]
    switch (action.type){
        case "ADDFIREDATA":
            if (dataB.indexOf(action.typeOfEmergency)==-1){
                dataB.push(action.typeOfEmergency)
            }
            return dataB;
        case "REMOVEFIREDATA":
            dataB.splice(dataB.indexOf(action.typeOfEmergency), 1)
            return dataB
        default:
            return state;

    }
}

export default otherReducer;