import {combineReducers} from 'redux'
import {
  ChoreRefByKey,
  ADD_CHORE,
  TOGGLE_CHORE,
  SET_VISIBILITY_FILTER,
  REQUEST_CHORES,
  RECEIVE_CHORES,
  VisibilityFilters
} from './actions'
const {SHOW_ALL} = VisibilityFilters
import * as TC from "./tc.js"

function visibiltyFilter(state = SHOW_ALL, action) {
  // console.log("VF: ", state, action)
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function chores(state = {
  isFetching: false,
  didInvalidate: false,
  chores: []
}, action) {
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
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case RECEIVE_CHORES:
      console.log("RECIEVE CHORES", action)
      var choresArray = []
      for (var key in action.chores) {
        // console.log(key, action.chores[key], action.chores[key].hasOwnProperty(key))
        // if (!action.chores[key].hasOwnProperty(key)) {
        //   console.log(action.chores[key])
        //   continue;
        // }

        var newChore = {
          ...action.chores[key],
          key: key
        }

        choresArray.push(newChore)
      }
      console.log(choresArray);
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        chores: choresArray
      })

    default:
      return state
  }
}

const choresApp = combineReducers({visibiltyFilter, chores})

export default choresApp
