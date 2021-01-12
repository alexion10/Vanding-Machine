import React from "react";
import Counter from './Counter/Counter';
import Products from './Products/Products';

// Actions =>
import { messageDisplay } from './Keypad/Action';

// Redux =>
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import compose from 'recompose/compose';

class VendingMachine extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
         <div class="container">           
            <Products  />
            <Counter />
            <div className="takeProduct">
              <button onClick={() => this.props.messageDisplay()}>Take Product!</button> 
            </div>
         </div>
      );
    }
  };
  
  // mapStateToProps =>
function mapStateToProps(state){
    return state;
}
//Bind actions to be used along redux =>
function matchDispatchToProps(dispatch){
    return bindActionCreators({
        messageDisplay
    }, dispatch);
}

export default compose(
    connect(mapStateToProps, matchDispatchToProps)
)(VendingMachine); 