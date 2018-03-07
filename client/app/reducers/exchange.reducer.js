import { EXCHANGE } from "../constants/exchange";

const initialState = {
    exchange: ''
};

export function ExchangeReducer(state = initialState, action) {
    switch(action.type) {
        case EXCHANGE.EUR_USD_EXCHANGE:
            state.exchange = action.payload;
            break;
        case EXCHANGE.RESET:
        default:
            state = initialState;
            break;
    }
    return state;
}
