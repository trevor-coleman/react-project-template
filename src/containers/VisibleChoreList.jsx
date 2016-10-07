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
    return {
        chores: getVisibleChores(state.chores, state.visibiltyFilter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChoreClick: (id) => {
            dispatch(toggleChore(id))
        }
    }
}

const VisibleChoreList = connect(mapStateToProps, mapDispatchToProps)(ChoreList)

export default VisibleChoreList
