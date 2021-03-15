const initialState = {
    data: {},
    error: null,
    loading: false,
    randomUserStake: [],
    randomUserPredict: []
}

const randomUserDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return { ...state, error: null, loading: true };
        case "RECEIVE_DATA_SUCCESS":
            return { ...state, data: action.payload, error: null, loading: false };
        case "RECEIVE_DATA_FAILURE":
            return { ...state, data: {}, error: action.payload, loading: false };
        case "RESET_RANDOM_USER_STAKE":
            return { ...state, randomUserStake: [] }
        case "SET_RANDOM_USER_STAKE":
            const newRandomUserStake = []
            let length = Object.values(state.data).length
            for (let i = 0; i < length; i++) {
                let arrayItemNumber = Math.floor(Math.random() * length);
                newRandomUserStake[arrayItemNumber] = Math.floor(Math.random() * 15) + 1
            }
            return { ...state, randomUserStake: newRandomUserStake }
        case "SET_RANDOM_USER_PREDICT":
            const newRandomUserPredict = []
            state.randomUserStake.forEach((item, index) => {
                let predict = Math.round(Math.random())
                if (predict) {
                    if (item) newRandomUserPredict[index] = 'over'
                } else {
                    if (item) newRandomUserPredict[index] = 'under'
                }
            })
            return { ...state, randomUserPredict: newRandomUserPredict }
        case "RESET_RANDOM_USER_PREDICT":
            return { ...state, randomUserPredict: [] }
        default:
            return state;
    }
};

export default randomUserDataReducer;
