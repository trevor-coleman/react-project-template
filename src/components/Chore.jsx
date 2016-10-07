// eslint-disable-next-line no-unused-vars 
import React, {PropTypes} from 'react'

const Chore = ({onClick, completed, text}) =>
  (<li
    onClick={onClick}
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  >
  {text}
</li>)

Chore.PropTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Chore
