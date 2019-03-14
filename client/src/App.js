import React, {Component} from 'react';
import {encode, valueChangeHandler} from "./store/actions";
import {connect} from "react-redux";

class App extends Component {

    render() {
        return (
            <div className="container">
                <textarea
                    placeholder="Message for encode"
                    name="encMessage"
                    value={this.props.encMessage}
                    onChange={event => this.props.onValueChange(event)}
                />
                <input
                    type="text"
                    placeholder="password"
                    name="password"
                    value={this.props.password}
                    onChange={event => this.props.onValueChange(event)}
                />
                <button
                    type="button"
                    onClick={() => {this.props.onEncode(this.props.encMessage, this.props.password)}}
                >
                    Encode
                </button>
                <button
                    type="button"
                >
                    Decode
                </button>
                <textarea
                    placeholder="Message for decode"
                    name="decMessage"
                    value={this.props.decMessage}
                    onChange={event => this.props.onValueChange(event)}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    encMessage: state.encoded,
    decMessage: state.decoded,
    password: state.password,
});

const mapDispatchToProps = dispatch => ({
    onValueChange: event => dispatch(valueChangeHandler(event.target.value, event.target.name)),
    onEncode: (message, password) => dispatch(encode(message, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
