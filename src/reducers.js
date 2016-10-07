import { combineReducers } from 'redux'
import { ADD_CHORE, TOGGLE_CHORE, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions'
const { SHOW_ALL } = VisibilityFilters

function visibiltyFilter(state = SHOW_ALL, action) {
  // console.log("VF: ", state, action)
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function chores(state = [], action) {
	switch (action.type) {
		case ADD_CHORE:
			return [
				...state, {
					text: action.text,
          id: action.id,
					completed: false
				}
			]

		case TOGGLE_CHORE:
      console.log(state)
			return state.map((chore, index) => {
				if (index === action.index) {
					return Object.assign({}, chore, {
						completed: !chore.completed
					})
				}
        return chore
			})

		default:
			return state
	}
}



const choresApp = combineReducers({
  visibiltyFilter,
  chores
})

export default choresApp
