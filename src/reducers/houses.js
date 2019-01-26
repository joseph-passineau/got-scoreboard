import {
    DECREASE_CASTLES,
    DECREASE_FIEFDOMS,
    DECREASE_IRONTHRONE,
    DECREASE_KINGSCOURT,
    DECREASE_SUPPLIES,
    INCREASE_CASTLES,
    INCREASE_FIEFDOMS,
    INCREASE_IRONTHRONE,
    INCREASE_KINGSCOURT,
    INCREASE_SUPPLIES
} from '../actionTypes/house';

import { RESET_GAME } from '../actionTypes/game';

const initialState = [
    {
        id: 0,
        name: 'stark',
        supplies: 1,
        castles: 2,
        influenceTracks: {
            ironThrone: 3,
            fiefdoms: 5,
            kingsCourt: 2
        }
    },
    {
        id: 1,
        name: 'lannister',
        supplies: 2,
        castles: 1,
        influenceTracks: {
            ironThrone: 2,
            fiefdoms: 7,
            kingsCourt: 1
        }
    },
    {
        id: 2,
        name: 'greyjoy',
        supplies: 2,
        castles: 1,
        influenceTracks: {
            ironThrone: 5,
            fiefdoms: 1,
            kingsCourt: 7
        }
    },
    {
        id: 3,
        name: 'martell',
        supplies: 2,
        castles: 1,
        influenceTracks: {
            ironThrone: 4,
            fiefdoms: 3,
            kingsCourt: 3
        }
    },
    {
        id: 4,
        name: 'tyrell',
        supplies: 2,
        castles: 1,
        influenceTracks: {
            ironThrone: 6,
            fiefdoms: 2,
            kingsCourt: 4
        }
    },
    {
        id: 5,
        name: 'baratheon',
        supplies: 2,
        castles: 1,
        influenceTracks: {
            ironThrone: 1,
            fiefdoms: 6,
            kingsCourt: 6
        }
    },
    {
        id: 6,
        name: 'arryn',
        supplies: 1,
        castles: 2,
        influenceTracks: {
            ironThrone: 7,
            fiefdoms: 4,
            kingsCourt: 5
        }
    },
    {
        id: 7,
        name: 'targaryen',
        supplies: 4,
        castles: 1,
        influenceTracks: {
            ironThrone: 8,
            fiefdoms: 8,
            kingsCourt: 8
        }
    }
];

export default function(state = initialState, action) {
    switch (action.type) {
        case INCREASE_SUPPLIES: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    supplies: state[id].supplies + 1
                };
            });
        }
        case DECREASE_SUPPLIES: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    supplies: state[id].supplies - 1
                };
            });
        }
        case INCREASE_CASTLES: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    castles: state[id].castles + 1
                };
            });
        }
        case DECREASE_CASTLES: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    castles: state[id].castles - 1
                };
            });
        }
        case INCREASE_IRONTHRONE: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    influenceTracks: {
                        ...item.influenceTracks,
                        ironThrone: state[id].influenceTracks.ironThrone + 1
                    }
                };
            });
        }
        case DECREASE_IRONTHRONE: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    influenceTracks: {
                        ...item.influenceTracks,
                        ironThrone: state[id].influenceTracks.ironThrone - 1
                    }
                };
            });
        }
        case INCREASE_FIEFDOMS: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    influenceTracks: {
                        ...item.influenceTracks,
                        fiefdoms: state[id].influenceTracks.fiefdoms + 1
                    }
                };
            });
        }
        case DECREASE_FIEFDOMS: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    influenceTracks: {
                        ...item.influenceTracks,
                        fiefdoms: state[id].influenceTrack.fiefdoms - 1
                    }
                };
            });
        }
        case INCREASE_KINGSCOURT: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    influenceTracks: {
                        ...item.influenceTracks,
                        kingsCourt: state[id].influenceTracks.kingsCourt + 1
                    }
                };
            });
        }
        case DECREASE_KINGSCOURT: {
            const { id } = action.payload;

            return state.map((item, index) => {
                if (index !== id) {
                    return item;
                }
                return {
                    ...item,
                    influenceTracks: {
                        ...item.influenceTracks,
                        kingsCourt: state[id].influenceTracks.kingsCourt - 1
                    }
                };
            });
        }
        case RESET_GAME:
            return initialState;
        default:
            return state;
    }
}
