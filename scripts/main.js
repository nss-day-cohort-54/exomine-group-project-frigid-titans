import { Exomine } from "./Exomine.js"
const mainContainer = document.querySelector(".container")

// renderAllHTML needed for growth of application
const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()

// event listener that listens for submit button, to then re-render page
// with updated resource totals.