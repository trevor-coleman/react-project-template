import {combineReducers} from 'redux'
import {
    ChoreRefByKey,
    ADD_CHORE,
    TOGGLE_CHORE,
    SET_VISIBILITY_FILTER,
    REQUEST_CHORES,
    RECEIVE_CHORES,
    RECEIVE_USERS,
    VisibilityFilters
} from './actions'
const {SHOW_ALL} = VisibilityFilters

function visibiltyFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

function users(state = [], action) {
    switch (action.type) {
        case RECEIVE_USERS:
            var newUsersState = []
            for (var key in action.users) {
                var newUser = {
                    ...action.users[key],
                    key: key
                }
                newUsersState.push(newUser)

            }
            return newUsersState

        default:
            return state
    }

}

function chores(state = [], action) {
    switch (action.type) {
        case ADD_CHORE:
            return {
                ...state,
                chores: [
                    ...state.chores, {
                        text: action.text,
                        id: action.id,
                        completed: false
                    }
                ]
            }

            // case TOGGLE_CHORE:

        case REQUEST_CHORES:
            return {
                ...state,
                isFetching: true,
                didInvalidate: true
            }

        case RECEIVE_CHORES:
            var choresArray = []
            for (var key in action.chores) {

                var newChore = {
                    ...action.chores[key],
                    key: key
                }

                choresArray.push(newChore)
            }

            return choresArray

        default:
            return state
    }
}

const choresApp = combineReducers({visibiltyFilter, chores, users})

export default choresApp
