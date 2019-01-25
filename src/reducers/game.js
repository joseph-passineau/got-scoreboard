import {
    DECREASE_ROUND,
    DECREASE_WILDLING_THREAT,
    INCREASE_ROUND,
    INCREASE_WILDLING_THREAT,
    RESET_GAME
} from '../actionTypes/game';

const initialState = {
    round: 1,
    wildlingThreat: 2,
    housesIds: [0, 1, 2, 3, 4, 5, 6, 7]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INCREASE_ROUND:
            return {
                ...state,
                round: state.round + 1
            };
        case DECREASE_ROUND:
            return {
                ...state,
                round: state.round - 1
            };
        case INCREASE_WILDLING_THREAT:
            return {
                ...state,
                wildlingThreat: state.wildlingThreat + 2
            };
        case DECREASE_WILDLING_THREAT:
            return {
                ...state,
                wildlingThreat: state.wildlingThreat - 2
            };
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
}
