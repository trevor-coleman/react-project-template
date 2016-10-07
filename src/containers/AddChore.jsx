// eslint-disable-next-line no-unused-vars
import React from 'react'
import {connect} from 'react-redux'
// eslint-disable-next-line no-unused-vars
import {addChore} from '../actions'

let AddChore = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addChore(input.value));
                input.value = '';
            }}>
                <input ref={node => {
                    input = node
                }}/>
                <button type="submit">
                    Add Chore
                </button>
            </form>
        </div>
    )
}

AddChore = connect()(AddChore)

export default AddChore
