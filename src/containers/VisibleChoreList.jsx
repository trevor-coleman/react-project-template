import {connect} from 'react-redux'
import {toggleChore} from '../actions'
import ChoreList from '../components/ChoreList'

const getVisibleChores = (chores, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return chores
    case 'SHOW_COMPLETED':
      return chores.filter(c => c.completed)
    case 'SHOW_ACTIVE':
      return chores.filter(c => !c.completed)
  }
}

const mapStateToProps = (state) => {
  return getVisibleChores(state.chores, state.visibiltyFilter)
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChoreClick: (key, complete) => {
      dispatch(toggleChore(key, complete))
    }
  }
}

const VisibleChoreList = connect(mapStateToProps, mapDispatchToProps)(ChoreList)

export default VisibleChoreList
