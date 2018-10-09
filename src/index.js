import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from  'react-redux';
import thunk from 'redux-thunk'
import reducers from './reducers'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension? window.devToolsExtension(): f => f
))

console.log(store.getState());

// class Test extends React.Component{
//     constructor(props  ){
//         super(props)
//     }

//     render() {
//         console.log(this.props);
//         return <h2>测试组件 {this.props.match.params.location}</h2>
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/login' component={Auth}></Route>
                    <Route path='/dashboard' component={Dashboard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
                
            </div>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
