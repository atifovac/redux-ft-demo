import { EXCHANGE } from "../constants/exchange";

function eurUsdExchange(exchange){
    return {
        type: EXCHANGE.EUR_USD_EXCHANGE,
        payload: exchange
    }
}

function reset(){
    return {
        type: EXCHANGE.RESET,
        payload: ''
    };
}

export default { eurUsdExchange, reset };
