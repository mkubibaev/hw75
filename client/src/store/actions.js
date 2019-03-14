import axios from '../axios-api';

export const ENCODED_MESSAGE = 'ENCODED_MESSAGE';
export const DECODED_MESSAGE = 'DECODED_MESSAGE';
export const PASSWORD = 'PASSWORD';

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';
export const DECODE_SUCCESS = 'DECODE_SUCCESS';

export const encodeSuccess = encodedData => ({type: ENCODE_SUCCESS, encodedData});
export const decodeSuccess = decodedData => ({type: DECODE_SUCCESS, decodedData});


export const valueChangeHandler = (value, inputName) => {
    if (inputName === 'encMessage') {
        return {type: ENCODED_MESSAGE, value}
    } else if (inputName === 'decMessage') {
        return {type: DECODED_MESSAGE, value}
    } else {
        return {type: PASSWORD, value}
    }
};

export const encode = (message, password) => {
    return dispatch => {
        axios.post('/encode', {message, password}).then(
            response => dispatch(encodeSuccess(response.data))
        )
    }
};
