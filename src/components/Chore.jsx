import React, {PropTypes} from 'react'

const Chore = React.createClass({
    render() {

        var choreStyle = {}
        this.props.chore.complete
            ? choreStyle.textDecoration = "line-through"
            : choreStyle.textDecoration = ""

        return (
            <li onClick={this.props.onClick} style={choreStyle}>{this.props.chore.description}</li>
        )
    }
})

Chore.PropTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Chore
