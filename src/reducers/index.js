import { combineReducers } from 'redux';
import game from './game';
import houses from './houses';
import tracks from './tracks';

export default combineReducers({ game, houses, tracks });
