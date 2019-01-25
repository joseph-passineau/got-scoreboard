import {
    DECREASE_ROUND,
    DECREASE_WILDLING_THREAT,
    INCREASE_ROUND,
    INCREASE_WILDLING_THREAT,
    RESET_GAME
} from '../actionTypes/game';

export const increaseRound = () => ({
    type: INCREASE_ROUND
});

export const decreaseRound = () => ({
    type: DECREASE_ROUND
});

export const increaseWildlingThreat = () => ({
    type: INCREASE_WILDLING_THREAT
});

export const decreaseWildlingThreat = () => ({
    type: DECREASE_WILDLING_THREAT
});

export const resetGame = () => ({
    type: RESET_GAME
});
