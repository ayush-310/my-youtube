import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen : true,
        darktheme : true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        },
        toggleDarkTheme:(state)=>{
            state.darktheme = !state.darktheme;
        }
    }
})

export const { toggleMenu, closeMenu, toggleDarkTheme } = appSlice.actions;

export default appSlice.reducer;
