import { createSlice } from "@reduxjs/toolkit";

const storedTheme = localStorage.getItem("theme");


const initialState = {theme : storedTheme?JSON.parse(storedTheme) : false};
const themeSlice = createSlice({
    name : "theme",
    initialState,
    reducers : {
        themeButton(state){
           state.theme = !state.theme;
           localStorage.setItem("theme", JSON.stringify(state.theme))

        }
    }
})

export const {themeButton } = themeSlice.actions;
export default themeSlice.reducer;