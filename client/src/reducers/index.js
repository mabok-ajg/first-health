import { combineReducers } from 'redux';
import { saveCust, deleteCustById, findCustById, findCusts} from './customers';

export default combineReducers({
    saveCust, deleteCustById, findCustById, findCusts,


});