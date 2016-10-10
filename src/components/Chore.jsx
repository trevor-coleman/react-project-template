import React, {PropTypes} from 'react'

const Chore = React.createClass({
  render() {
    console.log(this.props.chore.description)
    return (
      <li onClick={this.props.onClick}>{this.props.chore.description}</li>
    )
  }
})

Chore.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Chore
