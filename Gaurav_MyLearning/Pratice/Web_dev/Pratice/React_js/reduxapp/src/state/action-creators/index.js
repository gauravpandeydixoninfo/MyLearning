export const depositMoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"deposit",
            payload: amount
        })
    }
}

export const withdrawNoney = (amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"withdraw",
            payload: amount
        })
    }
}
