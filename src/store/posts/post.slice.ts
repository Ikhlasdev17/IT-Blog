import { PostType } from '@/interface/post.interface'
import { createSlice } from '@reduxjs/toolkit'

interface InitialStateType {
	posts: PostType[] | []
}

export const initialState: InitialStateType = {
	posts: [],
}

export const postSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		getPosts(state, action) {
			state.posts = action.payload
		},
	},
})

export const postReducer = postSlice.reducer
export const { getPosts } = postSlice.actions
