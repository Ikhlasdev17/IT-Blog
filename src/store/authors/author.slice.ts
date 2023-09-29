import { AuthorDetailsType, AuthorType } from '@/interface/author.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface InitialStateProps {
	authors: AuthorType[]
	authorDetails: AuthorDetailsType | null
}

export const initialState: InitialStateProps = {
	authors: [],
	authorDetails: null,
}

export const authorSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		getAuthors(state, action) {
			state.authors = action.payload
		},
		getAuthorDetails(state, action: PayloadAction<AuthorDetailsType>) {
			state.authorDetails = action.payload
		},
	},
})

export const authorReducer = authorSlice.reducer
export const { getAuthors, getAuthorDetails } = authorSlice.actions
