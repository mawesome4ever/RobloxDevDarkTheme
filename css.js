// ==UserScript==
// @name         Roblox Dark Mode
// @namespace    name?
// @version      0.1
// @updateURL    https://raw.githubusercontent.com/mawesome4ever/RobloxDevDarkTheme/main/css.js
// @description  Sets the page to a darker color
// @author       mawesome4ever (addictedroblox1414)
// @match        http*://developer.roblox.com/*
// @grant        none
// ==/UserScript==


function main(){
    let main = document.getElementById("Grouped");
    main.css["background-color"] = "$141616";
}
document.body.onload = main();



