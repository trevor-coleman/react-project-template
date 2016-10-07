// eslint-disable-next-line no-unused-vars
import React, {PropTypes} from 'react'
// eslint-disable-next-line no-unused-vars
import Chore from './Chore'

const ChoreList = ({chores, onChoreClick}) => {
    return (
        <ul>
            {chores.map(chore => <Chore key={chore.id} {...chore} onClick={() => onChoreClick(chore.id)}/>)}
        </ul>
    )
}

ChoreList.propTypes = {
  chores: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onChoreClick: PropTypes.func.isRequired
}

export default ChoreList
