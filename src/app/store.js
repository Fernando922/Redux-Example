import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/post/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})