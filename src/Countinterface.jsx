import React, { useReducer } from 'react';

    const initialState = {count: 0}
    const reducer = (
        state = initialState,
        action: {type:string; payload?:any}
    ) =>{
        switch(action.type){
            case "Increment":
                return {count: state.count + 1}
            case "Decrement":
                return {count: state.count - 1}
            case "ResetCount":
                return {count: 0}
            default:
                return state
        }
    }
    
    const Counterinterface = () => {
        const [state, dispatch] = useReducer(reducer, initialState)
        const Increment = () => {
            dispatch({type:'Increment'})
        }
        const Decrement = () => {
            dispatch({type:'Decrement'})
        }
        const ResetCount = () => {
            dispatch({type:'ResetCount'})
        }
        return (
            <div>
                <h1>{state.count}</h1>
                <button onClick={Increment}>Increase</button>
                <button onClick={Decrement}>Decrease</button>
                <button onClick={ResetCount}>Reset</button>
            </div>
    )
}

export default Counterinterface