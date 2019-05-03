import {
    DECREASE_CASTLES,
    DECREASE_SUPPLIES,
    INCREASE_CASTLES,
    INCREASE_SUPPLIES
} from '../actionTypes/house';

import { RESET_GAME } from '../actionTypes/game';

const initialState = {
    0: {
        id: 0,
        name: 'stark',
        supplies: 1,
        castles: 2
    },
    1: {
        id: 1,
        name: 'lannister',
        supplies: 2,
        castles: 1
    },
    2: {
        id: 2,
        name: 'greyjoy',
        supplies: 2,
        castles: 1
    },
    3: {
        id: 3,
        name: 'martell',
        supplies: 2,
        castles: 1
    },
    4: {
        id: 4,
        name: 'tyrell',
        supplies: 2,
        castles: 1
    },
    5: {
        id: 5,
        name: 'baratheon',
        supplies: 2,
        castles: 1
    },
    6: {
        id: 6,
        name: 'arryn',
        supplies: 1,
        castles: 2
    },
    7: {
        id: 7,
        name: 'targaryen',
        supplies: 4,
        castles: 1
    }
};

export default function(state = initialState, action) {
    switch (action.type) {
        case INCREASE_SUPPLIES: {
            const { id } = action.payload;
            const house = state[id];

            return {
                ...state,
                [id]: {
                    ...house,
                    supplies: house.supplies + 1
                }
            };
        }
        case DECREASE_SUPPLIES: {
            const { id } = action.payload;
            const house = state[id];

            return {
                ...state,
                [id]: {
                    ...house,
                    supplies: house.supplies - 1
                }
            };
        }
        case INCREASE_CASTLES: {
            const { id } = action.payload;
            const house = state[id];

            return {
                ...state,
                [id]: {
                    ...house,
                    castles: house.castles + 1
                }
            };
        }
        case DECREASE_CASTLES: {
            const { id } = action.payload;
            const house = state[id];

            return {
                ...state,
                [id]: {
                    ...house,
                    castles: house.castles - 1
                }
            };
        }
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
}
