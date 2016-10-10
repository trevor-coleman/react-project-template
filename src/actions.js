// ACTION TYPES

import firebase from 'firebase'

//SYCHRONOUS
export const ADD_CHORE = 'ADD_CHORE'
export const TOGGLE_CHORE = 'TOGGLE_CHORE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//ASYNCHRONOUS
export const FETCH_CHORES = 'FETCH_CHORES'
export const POST_CHORE = 'POST_CHORE'
export const REQUEST_CHORES = 'REQUEST_CHORES'
export const RECEIVE_CHORES = 'RECEIVE_CHORES'

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

var config = {
  apiKey: "AIzaSyAk-lMvBNM3LXY_-DuCQsdRDK1i0CAH9XI",
  authDomain: "test-project-fa048.firebaseapp.com",
  databaseURL: "https://test-project-fa048.firebaseio.com",
  storageBucket: "test-project-fa048.appspot.com",
  messagingSenderId: "812007939829"
};

const Chores = firebase.initializeApp(config);

export const ChoresRef = Chores
  .database()
  .ref("chores")

export const ChoreRefByKey = (key) => {
  return Chores
    .database()
    .ref("chores/" + key)
}
//FIREBASE INITIALIZER
//eslint-disable-next-line no-unused-vars
var pushABunchOfChores = () => {
  ChoresRef.push({description: "Wipe the Counters", complete: false})
  ChoresRef.push({description: "Take out the Garbage", complete: false})
  ChoresRef.push({description: "File Loose Papers", complete: false})
  ChoresRef.push({description: "Sweep and Mop", complete: false})
}
// pushABunchOfChores()

//ACTION CREATORS

export const requestChores = () => {
  type : REQUEST_CHORES
}

export const receiveChores = (chores) => {
  return {type: RECEIVE_CHORES, chores: chores}
}

export const fetchChores = () => {
  return function(dispatch) {
    console.log("fetchChores")
    ChoresRef.on('value', snapshot => {
      console.log("Value event", snapshot.val())
      dispatch(receiveChores(snapshot.val()))
    })
  }
}

var nextChoreId = 0

export const addChore = (text) => {
  console.log("addChore")
  return ({
    type: 'ADD_CHORE',
    id: nextChoreId++,
    text
  })
}

export const toggleChore = (chore) => {
  return function(dispatch) {
    ChoreRefByKey(chore.key).set({
      ...chore,
      complete: !chore.complete
    });
  }
}

export const setVisibilityFilter = (filter) => {
  console.log("setVisibilityFilter")
  return {type: SET_VISIBILITY_FILTER, filter}
}
