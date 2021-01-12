import {decreseQuantity} from '../Products/Action';

export const identifyProduct= (number) => {
    return{
        type: 'identifyProduct',
        payload: number   
    };
};

export const productPrice = (idPrice) => {
    return{
        type: 'productPrice',
        id: idPrice
    };
};

export const resetProductId= () => {
    return{
        type: 'resetProductId', 
    };
};

export const Message = (message) => {
    return{
        type: 'Message',
        payload: message   
    };
};

export function buy(code){
    return(dispatch, getstate) => {
        const state = getstate();
        const money = state.counter.money;
        const price = state.items.products[code].price;

        if((money - price) >= 0){
            dispatch({
                type: 'Decrement',
                payload: {
                    "money": money-price
                }
            });
        }else{
            dispatch({
                type: 'Update',
                payload: {
                    'message': 'You dont have enough money',
                    'code': code
                }
            })
        }

    }
}

export function messageDisplay(){
    return (dispatch, getState) => {
        const state = getState();
        const code = state.productCode.code;
        const productId = state.items.products;
        
        if(code > productId.length-1){
            dispatch({
                type: 'Update',
                payload: {
                    "message": "Choose a valid product",
                    "code": 0
                }
            });
        } else {
            dispatch({
                type: 'Update',
                payload: {
                    "message": 'Take your product',
                    "code": code
                }
            });
            dispatch(decreseQuantity(code)); 
            dispatch(buy(code)); 
        } 
        
    }
}