import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux'

// class App extends Component {
//   // constructor(props) {

//   // }

//   render() {
//     return (
//       <div>
//         <h1>现在有机枪{this.props.num}把</h1>
//         <button onClick={() =>  this.props.addGun()}>申请武器</button>
//         <button onClick={() =>  this.props.removeGun()}>上交武器</button>
//         <button onClick={() =>  this.props.addGunAsync()}>拖两天</button>
//       </div>
//     );
//   }
// }

// const mapStatetoProps = (state) => {
//   return { num: state }
// }

// const actionCreators = { addGun, removeGun, addGunAsync }

// App = connect(mapStatetoProps, actionCreators)(App)
// export default App;

@connect(
  store => ({num: store.counter}),
  { addGun, removeGun, addGunAsync }
)
class App extends Component {

  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={() =>  this.props.addGun()}>申请武器</button>
        <button onClick={() =>  this.props.removeGun()}>上交武器</button>
        <button onClick={() =>  this.props.addGunAsync()}>拖两天</button>
      </div>
    );
  }
}

export default App;
