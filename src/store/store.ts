import { configureStore } from '@reduxjs/toolkit'
import { authorReducer } from './authors/author.slice'
import { postReducer } from './posts/post.slice'
import { sidebarReducer } from './sidebar/sidebar.slice'

export const store = configureStore({
	reducer: {
		sidebar: sidebarReducer,
		posts: postReducer,
		authors: authorReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
