import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from './Auth.redux'

@connect(
    state=>state.auth,
    {login}
)
class Auth extends Component{

    render(){
        return (
            <div>
                {this.props.isAuth? <Redirect to='/dashboard'></Redirect>: null}
                <h2>你没有权限，需要登录才能查看</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
        
    }
}

export default Auth;