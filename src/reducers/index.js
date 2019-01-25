import { combineReducers } from 'redux';
import game from './game';
import houses from './houses';

export default combineReducers({ game, houses });
