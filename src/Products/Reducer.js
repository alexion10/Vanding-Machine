import update from 'react-addons-update';

export const items = (state = {
    products: [
        {id: 0, item: "Cola 0.25", price: 1, quantity: 3, color: "#5271C2"},
        {id: 1, item: "Fanta 0.25", price: 1.5, quantity: 2, color: "#35a541"},
        {id: 2, item: "M&M", price: 3.5, quantity: 4, color: "#bdb235"},
        {id: 3, item: "Poiana", price: 4.5, quantity: 6, color: "#db6623"},
        {id: 4, item: "Kinder Bueno", price: 6, quantity: 1, color: "#3e5eb3"},
        {id: 5, item: "Poiana Chokotoff", price: 5, quantity: 5, color: "#aa9e5c"}
    ]
}, action) => {
    switch(action.type) {
        case "decreseQuantity":
            return update(state,{products: {
                [action.id]: {
                    quantity: {$apply: (value) => {return (value > 0) ? value - 1 : 0}}
                }
            }});
        case "productPrice":
            return update(state,{products: {
                [action.id]: {
                    price: {$apply: (value) =>{return value}}
                }
            }});   
        default:
            return state;
    }
}