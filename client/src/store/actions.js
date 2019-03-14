import axios from '../axios-api';

export const ENCODED_MESSAGE = 'ENCODED_MESSAGE';
export const DECODED_MESSAGE = 'DECODED_MESSAGE';
export const PASSWORD = 'PASSWORD';

export const ENCODE_SUCCESS = 'ENCODE_SUCCESS';
export const DECODE_SUCCESS = 'DECODE_SUCCESS';

export const encodeSuccess = encoded => ({type: ENCODE_SUCCESS, encoded});
export const decodeSuccess = decoded => ({type: DECODE_SUCCESS, decoded});


export const valueChangeHandler = (value, inputName) => {
    if (inputName === 'encMessage') {
        return {type: ENCODED_MESSAGE, value}
    } else if (inputName === 'decMessage') {
        return {type: DECODED_MESSAGE, value}
    } else {
        return {type: PASSWORD, value}
    }
};

export const encode = encMessage => {
    return dispatch => {
        axios.post('/encode', encMessage).then(
            response => dispatch(encodeSuccess(response.data))
        )
    }
};
