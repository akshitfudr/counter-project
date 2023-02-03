import { DECREASE_COUNT, INCREASE_COUNT, REMOVE_TEXT } from "./ActionTypes";

const initialState = {count:0, message:''}
const counterReducer = (state= initialState, action)=>{
    switch (action.type) {
        case INCREASE_COUNT:
            return{
                ...state,
                count: state.count+1,
                message: "You have pressed + button Count has been increased by 1"
                // here it returned modified state 
            }
    
        case DECREASE_COUNT:
            return{
                ...state,
                count: state.count-1,
                message: "You have pressed - button Count has been decreased by 1"
            }
        case REMOVE_TEXT:
            return{
                ...state,
                message: "Hello World!"
            }
        default:
            return state
    
    }
}
export default counterReducer