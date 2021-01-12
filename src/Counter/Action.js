export const increment = (number) => {
    return{
        type: 'Increment',
        payload: number
    };
};

export const reset = () => {
    return{
        type: 'Reset'
    };
};
