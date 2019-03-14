import {DECODED_MESSAGE, ENCODE_SUCCESS, ENCODED_MESSAGE, PASSWORD} from "./actions";

const initialState = {
    encoded: '',
    decoded: '',
    password: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ENCODED_MESSAGE:
            return { ...state, encoded: action.value};

        case DECODED_MESSAGE:
            return { ...state, decoded: action.value};

        case PASSWORD:
            return { ...state, password: action.value};

        case ENCODE_SUCCESS:
            return {...state, decoded: action.encodedData.encoded};

        default:
            return state;
    }
};

export default reducer;
