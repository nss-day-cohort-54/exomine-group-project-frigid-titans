import { Exomine } from "./Exomine.js"
const mainContainer = document.querySelector(".container")

// renderAllHTML needed for growth of application
const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")

   

})

// event listener that listens for submit button, to then re-render page
// with updated resource totals.