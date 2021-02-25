import React from 'react';

import './Footer.css';

class Footer extends React.Component {

    constructor(props) {
        super(props);

        this.authorizationToggle = props.authorizationToggle;
        this.state = { authorizationState: props.authorizationState }
    }

    switchOn() {
        this.authorizationToggle(true);
    }

    switchOff() {
        this.setState( {authorizationState: false} )
    }

    userNameAdd() {
        return localStorage.getItem('userName') ? localStorage.getItem('userName') : '';
    }

    userNameSaveStorage(event) {
        const userName = event.target.innerHTML;
        let name = userName.replaceAll('&nbsp;', '');
        name = name.trim();
         if (name !== '') {
             localStorage.setItem('userName', name);
         } 
    }

    authorization() {
        if (this.state.authorizationState) {
            return (
                <div>
                    <p className="userName">{this.userNameAdd()}</p>
                    <span className="button" onClick = { (event) => this.switchOff(event) }>Sign out</span>
                </div>
            )
        } else 
        return (
            <div>
                <span className="button" onClick = { (event) => this.switchOn(event) }>Sign in</span>
            </div>
        )
    }

    render() {
        return (
            <footer className="footer">
                <div className="footerWrapper">
                    <div className="footerTextBox">
                        <a className="aboutPrime" href="">Learn more about Prime</a>
                    </div>
                    <div className="signInTextBox">
                        <p className="memberAreYou">Already a member?</p>
                        <div className="auth">{this.authorization()}</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;