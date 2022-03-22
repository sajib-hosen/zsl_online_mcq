import { configureStore } from "@reduxjs/toolkit";
import studentReducer from './../Features/studentSlice'
import resultReducer from './../Features/resultSlice'

const store = configureStore({
    reducer:{
        currentStudents: studentReducer,
        stuAns: resultReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;