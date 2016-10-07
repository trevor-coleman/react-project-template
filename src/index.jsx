import React from 'react'
import {render} from 'react-dom'
import ThisComponent from './components/ThisComponent'

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello React Whats Up</p>
                <ThisComponent/>
            </div>
        )

    }
}

render(
    <App/>, document.getElementById('app'))
