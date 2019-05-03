import {
    DECREASE_FIEFDOMS,
    DECREASE_IRONTHRONE,
    DECREASE_KINGSCOURT,
    INCREASE_FIEFDOMS,
    INCREASE_IRONTHRONE,
    INCREASE_KINGSCOURT
} from '../actionTypes/track';

import { RESET_GAME } from '../actionTypes/game';

const initialState = {
    ironThrone: [5, 1, 0, 3, 2, 4, 6],
    fiefdoms: [2, 4, 3, 6, 0, 5, 1],
    kingsCourt: [1, 0, 3, 4, 6, 5, 2]
};

const reorder = (list, from, to) => {
    const result = Array.from(list);
    const [removed] = result.splice(from, 1);
    result.splice(to, 0, removed);

    return result;
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INCREASE_IRONTHRONE: {
            const { id } = action.payload;
            const from = state.ironThrone.indexOf(id);

            return {
                ...state,
                ironThrone: reorder(state.ironThrone, from, from + 1)
            };
        }
        case DECREASE_IRONTHRONE: {
            const { id } = action.payload;
            const from = state.ironThrone.indexOf(id);

            return {
                ...state,
                ironThrone: reorder(state.ironThrone, from, from - 1)
            };
        }
        case INCREASE_FIEFDOMS: {
            const { id } = action.payload;
            const from = state.fiefdoms.indexOf(id);

            return {
                ...state,
                fiefdoms: reorder(state.fiefdoms, from, from + 1)
            };
        }
        case DECREASE_FIEFDOMS: {
            const { id } = action.payload;
            const from = state.fiefdoms.indexOf(id);

            return {
                ...state,
                fiefdoms: reorder(state.fiefdoms, from, from - 1)
            };
        }
        case INCREASE_KINGSCOURT: {
            const { id } = action.payload;
            const from = state.kingsCourt.indexOf(id);

            return {
                ...state,
                kingsCourt: reorder(state.kingsCourt, from, from + 1)
            };
        }
        case DECREASE_KINGSCOURT: {
            const { id } = action.payload;
            const from = state.kingsCourt.indexOf(id);

            return {
                ...state,
                kingsCourt: reorder(state.kingsCourt, from, from - 1)
            };
        }
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
}
