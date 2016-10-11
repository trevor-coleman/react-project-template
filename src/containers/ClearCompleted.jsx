import {connect} from 'react-redux'

import {clearCompleted} from "../actions"

import ClearCompletedButton from '../components/ClearCompletedButton.jsx'

const mapStateToProps = (state) => {
    return {chores: state.chores}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (chores) => {
            dispatch(clearCompleted(chores))
        }
    }
}

const ClearCompleted = connect(mapStateToProps, mapDispatchToProps)(ClearCompletedButton)

export default ClearCompleted
