
import { identifyProduct, resetProductId, messageDisplay } from './Action';
import { useSelector, useDispatch } from 'react-redux';

function Keypad(){
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const dispatch = useDispatch();
    const codeDisplay = useSelector(state => state.productCode.code);
    const messageDisplay = useSelector(state => state.productCode.message);
    const numbers = arr.map((i) => <button onClick={() => dispatch(identifyProduct(i))}>{i}</button>);
    
    return (
        <div className="keypad">
            <div>
                <p>{codeDisplay}</p>
            </div>
            <div>
                <p>{messageDisplay}</p>
            </div>
           <div className="keys">{numbers}</div> 
           <button onClick={() => dispatch(resetProductId())}>Reset product code!</button>
        </div>
    )  
}

export default Keypad;