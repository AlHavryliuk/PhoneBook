import { createSlice } from '@reduxjs/toolkit';
import { addContact, getContacts, removeContact } from './contactsOperations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    changeMode: {
      isActive: false,
      id: null,
    },
    isLoading: false,
    error: null,
  },

  reducers: {
    activeChangeMode: (state, action) => {
      state.changeMode.isActive = true;
      state.changeMode.id = action.payload;
    },
    disactiveChangeMode: (state) => {
      state.changeMode.isActive = false;
      state.changeMode.id = null;
    },
  },

  extraReducers: builder =>
    builder

      // ---- GET ----

      .addCase(getContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ---- DELETE ----

      .addCase(removeContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ---- POST ----

      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

const contactsReducer = contactsSlice.reducer;
export const { activeChangeMode, disactiveChangeMode } = contactsSlice.actions;
export default contactsReducer;
