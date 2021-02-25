import React from 'react';

import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="headerWrapper">
                    <div className="logoBox">
                        <div className="uno">
                        <img className="letter" src="/B.png"></img>
                            <img className="letter" src="/U.png"></img>
                            <img className="letter" src="/S.png"></img>
                            <img className="letter" src="/I.png"></img>
                            <img className="letter" src="/N.png"></img>
                            <img className="letter" src="/E.png"></img>
                            <img className="letter" src="/S.png"></img>
                            <img className="letter" src="/S.png"></img>
                        </div>
                        <div className="due">
                            <img className="letter" src="/I.png"></img>
                            <img className="letter" src="/N.png"></img>
                            <img className="letter" src="/S.png"></img>
                            <img className="letter" src="/I.png"></img>
                            <img className="letter" src="/D.png"></img>
                            <img className="letter" src="/E.png"></img>
                            <img className="letter" src="/R.png"></img>
                        </div>
                        <div className="tre">
                            <img className="letterSmaller" src="/p2.png"></img>
                            <img className="letterSmaller" src="/r2.png"></img>
                            <img className="letterSmaller" src="/i2.png"></img>
                            <img className="letterSmaller" src="/m2.png"></img>
                            <img className="letterSmaller" src="/e2.png"></img>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;