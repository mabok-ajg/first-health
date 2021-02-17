import {
    SAVE_CUSTOMER_REQUEST, SAVE_CUSTOMER_SUCCESS, SAVE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE,
    FIND_CUSTOMER_REQUEST, FIND_CUSTOMER_SUCCESS, FIND_CUSTOMER_FAILURE,
    FIND_CUSTOMERS_REQUEST, FIND_CUSTOMERS_SUCCESS, FIND_CUSTOMERS_FAILURE
} from '../actions/constants';

const defaultState = { data: null, loading: false, error: null }


export function saveCust(state = defaultState, action) {
    switch (action.type) {
        case SAVE_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SAVE_CUSTOMER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SAVE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
    
}

export function deleteCustById(state = defaultState, action) {
    switch (action.type) {
        case DELETE_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_CUSTOMER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findCustById(state = defaultState, action) {
    switch (action.type) {
        case FIND_CUSTOMER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_CUSTOMER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_CUSTOMER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function findCusts(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
        case FIND_CUSTOMERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_CUSTOMERS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_CUSTOMERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

