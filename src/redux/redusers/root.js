import { combineReducers } from 'redux'
import {postReducer} from './post'

const rootReduser = combineReducers({
    post: postReducer
})

export default rootReduser
