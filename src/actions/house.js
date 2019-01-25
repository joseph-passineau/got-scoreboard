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

export const increaseSupplies = id => ({
    type: INCREASE_SUPPLIES,
    payload: { id }
});

export const decreaseSupplies = id => ({
    type: DECREASE_SUPPLIES,
    payload: { id }
});

export const increaseCastles = id => ({
    type: INCREASE_CASTLES,
    payload: { id }
});

export const decreaseCastles = id => ({
    type: DECREASE_CASTLES,
    payload: { id }
});

export const increaseIronThrone = id => ({
    type: INCREASE_IRONTHRONE,
    payload: { id }
});

export const decreaseIronThrone = id => ({
    type: DECREASE_IRONTHRONE,
    payload: { id }
});

export const increaseFiefdoms = id => ({
    type: INCREASE_FIEFDOMS,
    payload: { id }
});

export const decreaseFiefdoms = id => ({
    type: DECREASE_FIEFDOMS,
    payload: { id }
});

export const increaseKingsCourt = id => ({
    type: INCREASE_KINGSCOURT,
    payload: { id }
});

export const decreaseKingsCourt = id => ({
    type: DECREASE_KINGSCOURT,
    payload: { id }
});
