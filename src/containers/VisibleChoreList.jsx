import {connect} from 'react-redux'
import {toggleChore} from '../actions'
import ChoreList from '../components/ChoreList'

const getVisibleChores = (state, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return {chores: state.chores}
        case 'SHOW_COMPLETED':
            return {
                chores: state
                    .chores
                    .filter(c => c.complete)
            }
        case 'SHOW_ACTIVE':
            return {
                chores: state
                    .chores
                    .filter(c => !c.complete)
            }
    }
}

const mapStateToProps = (state) => {
    return getVisibleChores(state, state.visibiltyFilter)
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChoreClick: (chore) => {
            dispatch(toggleChore(chore))
        }
    }
}

const VisibleChoreList = connect(mapStateToProps, mapDispatchToProps)(ChoreList)

export default VisibleChoreList
