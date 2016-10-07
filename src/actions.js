// ACTION TYPES

export const ADD_CHORE = 'ADD_CHORE'
export const TOGGLE_CHORE = 'TOGGLE_CHORE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//ACTION CREATORS

let nextChoreId = 0
export const addChore = (text) => {
  return {
    type: 'ADD_CHORE',
    id: nextChoreId++,
    text
  }
}

export function toggleChore(index) {
	return {
		type: TOGGLE_CHORE,
		index
	}
}

export function setVisibilityFilter(filter) {
	return {
		type: SET_VISIBILITY_FILTER,
		filter
	}
}
