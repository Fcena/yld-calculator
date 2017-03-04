import * as types from '../constants/ActionTypes'
import * as operations from '../constants/Operations'
import * as funcs from '../functions/Operations'
import { Stack } from 'immutable'

const initialState = {
    stack: Stack()
}

export default function calculate(state = initialState, action) {

    return state;
}
