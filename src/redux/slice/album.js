import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAlbums = createAsyncThunk('fetchAlbums', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');
  return response.json();
});
const albumSlice = createSlice({
  name: 'album',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAlbums.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default albumSlice.reducer;
