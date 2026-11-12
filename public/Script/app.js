/* app.js - my client-side script, loaded on every page by header.ejs
   IIFE (Immediately Invoked Function Expression): the function runs straight away,
   and its variables stay private so they don't clash with other scripts */
(function () {

    // Start runs once the whole page has finished loading
    function Start()
    {
        console.log("App started...");
    }

    // When the page's "load" event fires, call Start (event handling, Chapter 9)
    window.addEventListener("load", Start);

})();