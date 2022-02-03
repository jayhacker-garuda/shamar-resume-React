import Home from "../PortfolioContainer/Home/Home";

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home,
    },

];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1
    for (let s = 0; s < TOTAL_SCREENS.length; s++) {
        if (TOTAL_SCREENS[s].screen_name === screen_name) return s
    }
    return -1
};