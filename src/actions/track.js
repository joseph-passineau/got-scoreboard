import {
    MOVE_IRONTHRONE,
    MOVE_FIEFDOMS,
    MOVE_KINGSCOURT
} from '../actionTypes/track';

export const moveIronThrone = (source, destination) => ({
    type: MOVE_IRONTHRONE,
    payload: { source, destination }
});

export const moveFiefdoms = (source, destination) => ({
    type: MOVE_FIEFDOMS,
    payload: { source, destination }
});

export const moveKingscourt = (source, destination) => ({
    type: MOVE_KINGSCOURT,
    payload: { source, destination }
});


