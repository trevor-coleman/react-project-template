// eslint-disable-next-line no-unused-vars
import React, {PropTypes} from 'react'
// eslint-disable-next-line no-unused-vars
import Chore from './Chore'

const ChoreList = ({chores, onChoreClick}) => {
  console.log("ChoreList -  Chores", chores)
  return (
    <ul>
      {chores
        .chores
        .map(chore => <Chore key={chore.key} chore={chore} onClick={() => onChoreClick(chore.key)}/>)}
    </ul>
  )
}

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
