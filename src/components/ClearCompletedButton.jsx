import React, {PropTypes} from 'react'
import {Button} from 'react-bootstrap'

const ClearCompletedButton = React.createClass({
    render() {
        return (
            <Button onClick={e => {
                e.preventDefault();
                this
                    .props
                    .onClick(this.props.chores)
            }}>Clear Completed</Button>
        )
    }
})

export default ClearCompletedButton
