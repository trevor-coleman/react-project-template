import React, {PropTypes} from 'react'
import Chore from './Chore'

const ChoreList = React.createClass({
  render() {
    return (
      <ul>
        {chores
          .chores
          .map(chore => <Chore key={chore.key} chore={chore} onClick={() => onChoreClick(chore.key)}/>)}
      </ul>

    )
  }
})

ChoreList.propTypes = {
  chores: PropTypes.shape({
    isFetching: PropTypes.isRequired,
    didInvalidate: PropTypes.bool.isRequired,
    chores: PropTypes.arrayOf(PropTypes.shape({description: PropTypes.string.isRequired, key: PropTypes.string.isRequired}))
  })
}

// ChoreList.propTypes = {
//   chores: PropTypes.(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onChoreClick: PropTypes.func.isRequired
// }

export default ChoreList
