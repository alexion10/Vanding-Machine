import update from 'react-addons-update';

export const productCode = (state = {
   message: 'Enter product code',
   code: 0
}, action) => {
    switch(action.type) {
        case "Message":
            return update(state,{message: {$set: action.payload}});
        case "identifyProduct":
            return update(state,{code: {$apply: (value) => value * 10 + action.payload}});
        case "resetProductId":
            return update(state,{code: {$apply: (value) => value * 0}});
        case "Update":
            return update(state,{$set: action.payload});
        default:
            return state;
    }
}

