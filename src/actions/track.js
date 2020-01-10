import {
    MOVE_IRONTHRONE
} from '../actionTypes/track';

export const moveIronThrone = (source, destination) => ({
    type: MOVE_IRONTHRONE,
    payload: { source, destination }
});
