import React, {Component} from 'react';

class ToUp extends Component {
    state = {
        intervalId: 0
    }

    scrollStep() {
        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }

        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop() {
        let interval = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
        this.setState({intervalId: interval});
    }

    render() {
        return (
        <div 
            className="footer__to-up-wrapper footer__fixed-common"
            onClick={() => {this.scrollToTop()}}
        >
            <span className="footer__to-up">Наверх</span>
        </div>
        );
    }
};

export default ToUp;