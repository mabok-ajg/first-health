import {
    SAVE_CUSTOMER_REQUEST, SAVE_CUSTOMER_SUCCESS, SAVE_CUSTOMER_FAILURE,
    DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE,
    FIND_CUSTOMER_REQUEST, FIND_CUSTOMER_SUCCESS, FIND_CUSTOMER_FAILURE,
    FIND_CUSTOMERS_REQUEST, FIND_CUSTOMERS_SUCCESS, FIND_CUSTOMERS_FAILURE
} from './constants';
import { commonAxios } from '../utils/apiUtils';
import Swal from 'sweetalert2';

function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value);
    });
}

export const deleteById = (id) =>
    (dispatch) => {
        dispatch({
            type: DELETE_CUSTOMER_REQUEST
        });

        commonAxios.delete(`customers/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(deleteCustSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been deleted',
                })   
            })
            .catch(error => {
                dispatch(deleteCustFailure(error));
            });
    };

export const save = ({ id, nama, umur, jenis_kelamin, alamat, no_hp, suhu, jenis_sample } = {}) =>
    (dispatch) => {
        dispatch({
            type: SAVE_CUSTOMER_REQUEST
        });

        const request = id ?
            commonAxios.put(`customers/${id}`, { id, nama, umur, jenis_kelamin, alamat, no_hp, suhu, jenis_sample }) :
            commonAxios.post('customers/', { nama, umur, jenis_kelamin, alamat, no_hp, suhu, jenis_sample });
        
        request
            .then(data => sleep(1000, data))
            .then(data => {
                dispatch(saveCustSuccess(data));
                Swal.fire({
                    icon: 'success',
                    title: 'Done',
                    text: 'Data has been added',
                })
            })
            .catch(error => {
                dispatch(saveCustFailure(error));
                Swal.fire({
                    icon: 'warning',
                    title: 'Warning...',
                    text: 'Silahkan lengkapi form terlebih dahulu.',
                })
                
            });
    };

export const findById = (id) =>
    (dispatch) => {
        dispatch({
            type: FIND_CUSTOMER_REQUEST
        });

        commonAxios.get(`customers/${id}`)
            .then(data => sleep(3000, data))
            .then(data => {
                dispatch(findCustSuccess(data));
            })
            .catch(error => {
                dispatch(findCustFailure(error));
            });
    };

export const findAll = () =>
    (dispatch) => {
        dispatch({
            type: FIND_CUSTOMERS_REQUEST
        });

        commonAxios.get('customers')
            .then(data => sleep(1500, data))
            .then(data => {
                data = data.customers
                dispatch(findCustsSuccess(data));
            })
            .catch(error => {
                dispatch(findCustsFailure(error));
            });

    };

function saveCustSuccess(data) {
    return {
        type: SAVE_CUSTOMER_SUCCESS,
        data: data
    }
};

function saveCustFailure(error) {
    return {
        type: SAVE_CUSTOMER_FAILURE,
        error: error
    }
};

function deleteCustSuccess(data) {
    return {
        type: DELETE_CUSTOMER_SUCCESS,
        data: data
    }
};

function deleteCustFailure(error) {
    return {
        type: DELETE_CUSTOMER_FAILURE,
        error: error
    }
};

function findCustSuccess(data) {
    return {
        type: FIND_CUSTOMER_SUCCESS,
        data: data
    }
};

function findCustFailure(error) {
    return {
        type: FIND_CUSTOMER_FAILURE,
        error: error
    }
};

function findCustsSuccess(data) {
    return {
        type: FIND_CUSTOMERS_SUCCESS,
        data: data
    }
};

function findCustsFailure(error) {
    return {
        type: FIND_CUSTOMERS_FAILURE,
        error: error
    }
};


