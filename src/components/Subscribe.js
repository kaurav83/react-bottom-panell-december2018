import React, { Component } from 'react';
import SubscribePopup from './SubscribePopup';

class Subscribe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popup: false
        }

        this.showPopup = this.showPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    showPopup(e) {
        e.preventDefault();

        this.setState({
            popup: true
        }, () => {
            document.addEventListener('click', this.closePopup);
        });
    }

    closePopup(e) {
        if (!this.togglePopup.contains(e.target)) {
            this.setState({
                popup: false
            }, () => {
                document.removeEventListener('click', this.closePopup);
            });
        }
    }

    render() {
        return (
            <div className="footer__subscribe footer__fixed-common">
                <span onClick={this.showPopup} className="footer__subscribe-btn">
                    Подписаться
                </span>

                {
                    this.state.popup
                        ? (
                            <span className="footer__subscribe-content"
                                ref={(element) => {
                                    this.togglePopup = element;
                                }}
                            >
                                <SubscribePopup popup={this.state} />
                            </span>
                        )
                        :
                        null
                }
            </div>
        )
    }
}

export default Subscribe;