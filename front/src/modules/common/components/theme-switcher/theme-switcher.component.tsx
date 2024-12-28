import React from "react";

// TODO: make it consistent and link current data-theme with checked state fo the checkbox, maybe with a react state
export const ThemeSwitcher = () => {
    const changeHandler = () => {
        const isDarkTheme =
            document.documentElement.getAttribute("data-theme") === "dark";
        document.documentElement.setAttribute(
            "data-theme",
            isDarkTheme ? "light" : "dark",
        );
    };

    return (
        <label className="switch">
            <input type="checkbox" onClick={changeHandler} />
            <span className="slider round"></span>
        </label>
    );
};
