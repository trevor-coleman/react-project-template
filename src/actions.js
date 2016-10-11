// ACTION TYPES

import firebase from 'firebase'
import faker from 'faker'

//SYCHRONOUS
export const ADD_CHORE = 'ADD_CHORE'
export const TOGGLE_CHORE = 'TOGGLE_CHORE'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

//ASYNCHRONOUS
export const FETCH_CHORES = 'FETCH_CHORES'
export const POST_CHORE = 'POST_CHORE'
export const REQUEST_CHORES = 'REQUEST_CHORES'
export const RECEIVE_CHORES = 'RECEIVE_CHORES'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

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

export const UsersRef = Chores
    .database()
    .ref("users")

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

var pushABunchOfUsers = () => {
    for (var i = 0; i < 10; i++) {
        UsersRef.push({
            name: faker
                .name
                .findName(),
            title: faker
                .name
                .title()
        })
    }
}

// pushABunchOfUsers()
// pushABunchOfChores()

//ACTION CREATORS

export const requestChores = () => {
    type : REQUEST_CHORES
}

export const clearCompleted = (chores) => {
    return function(dispatch) {
        chores.forEach((chore, index) => {
            if (chore.complete === true) {
                ChoreRefByKey(chore.key).remove()
            }
        })
    }
}

export const receiveChores = (chores) => {
    return {type: RECEIVE_CHORES, chores: chores}
}

export const receiveUsers = (users) => {
    return {type: RECEIVE_USERS, users: users}
}

export const fetchUsers = () => {
    return function(dispatch) {
        UsersRef.on('value', snapshot => {
            dispatch(receiveUsers(snapshot.val()))
        })
    }
}

export const fetchChores = () => {
    return function(dispatch) {
        ChoresRef.on('value', snapshot => {
            dispatch(receiveChores(snapshot.val()))
        })
    }
}

export const addChore = (text) => {
    return function(dispatch) {
        ChoresRef.push({description: text, complete: false})
    }

    return ({
        type: 'ADD_CHORE',
        chore: {
            description: text,
            complete: false
        }
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
    return {type: SET_VISIBILITY_FILTER, filter}
}
