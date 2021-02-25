import React from 'react';

import './Authorization.css';

class Authorization extends React.Component {
    constructor(props) {
        super(props);

        this.authorizationToggle = props.authorizationToggle;
        this.authorizationResult = props.authorizationResult;
    }

    login() {
        const password = document.getElementById('password').value;
        const login = document.getElementById('login').value;
        
        if (login.length >=3 && login.length <=20 && password.length >=3 && password.length <=20) {
            this.authorizationResult(true);
        } else {
            this.authorizationResult(false);
        }
    }

    render() {
        return (
            <div className="authWrapper">
                <div className="authorizationOff" onClick={() => this.authorizationToggle(false)}>
                </div>
                <form className="authorization">
                    <p className="enterWord">Enter</p>
                    <span className="authorizationContainer">
                        <input id="login"></input> 
                        <input id="password"></input>
                    </span>
                    <span className="checkBox">
                        <input id="checkMark" type="checkbox"></input>
                        <p className="rememberWord">Remember</p>
                    </span>
                    <button className="buttonAuth" onClick={() => this.login()}>Enter</button>
                </form>
                
            </div>
        )
    }
}

export default Authorization;
