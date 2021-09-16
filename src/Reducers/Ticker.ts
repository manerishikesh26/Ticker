import {IAction, IData} from '../Interfaces'
import { TICKER } from '../Actions/type'

const InitialState : IData = {
    BID : '',
    BID_SIZE : '',
    ASK : '',
    ASK_SIZE : '',
    DAILY_CHANGE : '',
    DAILY_CHANGE_RELATIVE : '',
    LAST_PRICE : '',
    VOLUME : '',
    HIGH : '',
    LOW : ''   
}
export const TickerStore = (state = InitialState, action: IAction) => {
    switch (action.type) {
        case TICKER.UPATE_BID:
            return {...state, BID:action.payload.value}
        case TICKER.UPATE_BID_SIZE:
            return {...state, BID_SIZE:action.payload.value}
        case TICKER.UPATE_ASK:
            return {...state, ASK:action.payload.value}
        case TICKER.UPATE_ASK_SIZE:
            return {...state, ASK_SIZE:action.payload.value}
        case TICKER.UPATE_DAILY_CHANGE:
            return {...state, DAILY_CHANGE:action.payload.value}
        case TICKER.UPATE_DAILY_CHANGE_RELATIVE:
            return {...state, DAILY_CHANGE_RELATIVE:action.payload.value}
        case TICKER.UPATE_LAST_PRICE:
            return {...state, LAST_PRICE:action.payload.value}
        case TICKER.UPATE_VOLUME:
                return {...state, VOLUME:action.payload.value}
        case TICKER.UPATE_HIGH:
            return {...state, HIGH:action.payload.value}
        case TICKER.UPATE_LOW:
            return {...state, LOW:action.payload.value}
        default:
            return state
    }
}

