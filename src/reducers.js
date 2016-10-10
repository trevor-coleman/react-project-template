import {combineReducers} from 'redux'
import {
  ADD_CHORE,
  TOGGLE_CHORE,
  SET_VISIBILITY_FILTER,
  REQUEST_CHORES,
  RECEIVE_CHORES,
  VisibilityFilters
} from './actions'
const {SHOW_ALL} = VisibilityFilters

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

    case TOGGLE_CHORE:
      console.log(state);
      return {
        ...state,
        chores: state
          .chores
          .map((chore, index) => {
            if (index === action.index) {
              return Object.assign({}, chore, {
                completed: !chore.completed
              })
            }
            return chore
          })
      }

    case REQUEST_CHORES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case RECEIVE_CHORES:
      console.log(action)
      var choresArray = []
      for (var key in action.chores) {
        // console.log(key, action.chores[key], action.chores[key].hasOwnProperty(key))
        // if (!action.chores[key].hasOwnProperty(key)) {
        //   console.log(action.chores[key])
        //   continue;
        // }

        choresArray.push({description: action.chores[key], key: key})
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
