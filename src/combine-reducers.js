import {counter} from './Counter/Reducer';
import {items} from './Products/Reducer';
import { productCode } from './Keypad/Reducer';
import {combineReducers} from 'redux';

const all = combineReducers({
    counter,
    items,
    productCode
})

export default all;