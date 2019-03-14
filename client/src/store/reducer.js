import {DECODED_MESSAGE, ENCODED_MESSAGE, PASSWORD} from "./actions";

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

        default:
            return state;
    }
};

export default reducer;
