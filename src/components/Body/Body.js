import React from 'react';

import './Body.css';

class Body extends React.Component {

    render() {
        return (
            <div className="body">
                <div className="bodyWrapper">
                    <div className="textBox">       
                        <span className="attentionWords">
                            It looks like you’re using an ad-blocker!
                        </span>
                        <span className="clearWords">
                            Business Insider is an advertising supported site and we noticed you have ad-blocking enabled. Here are two ways you can keep reading.
                        </span>
                    </div>
                    <div className="buttonContainer">
                        <div className="doItBox">
                            <p className="textButtonAbove">TURN OFF YOUR AD-BLOCKER</p>
                            <button className="doButton">DO IT NOW</button>
                        </div>
                        <div className="doItBox">
                            <p className="textButtonAbove">SUBSCRIBE TO BI PRIME FOR $1</p>
                            <button className="getButton">GET ACCESS NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Body;