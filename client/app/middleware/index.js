import {getApiProvider} from '../service/exchangeService';
import ExchangeActions from '../actions/exchange.actions';

export function getEurUsdExchange() {
    return function(dispatch) {
        getApiProvider()
            .getEurUsdExchange()
            .then(
                ok => dispatch(ExchangeActions.eurUsdExchange(ok.data)),
                err => dispatch(ExchangeActions.reset())
            );
    };
}
