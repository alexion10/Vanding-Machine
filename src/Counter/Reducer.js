import update from 'react-addons-update';

export const counter = (state = {money: 0} , action) => {
    switch(action.type){
        case 'Increment':
            return update(state,{money: {$set: state.money + action.payload}});
        case 'Decrement':
            return update(state,{$set: action.payload});
        case 'Reset':
            return update(state,{money: {$set: state.money * 0}});
        default:
            return state
    }
};


