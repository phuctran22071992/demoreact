import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './components/Game';


class App extends React.Component {
    render() {
        return (
            <div>
                <Game />
            </div>
        );
    }
}




ReactDOM.render(<App />, document.getElementById('app'));