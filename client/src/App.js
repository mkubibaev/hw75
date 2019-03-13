import React, {Component} from 'react';

class App extends Component {
    state = {

    };

    render() {
        return (
            <div className="container">
                <textarea placeholder="message for encode"/>
                <input type="text" placeholder="password"/>
                <button type="button">Encode</button>
                <button type="decode">Decode</button>
                <textarea placeholder="message for decode"/>
            </div>
        );
    }
}

export default App;
