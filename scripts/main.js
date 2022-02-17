import { Exomine } from "./Exomine.js"
import { Colonies } from "./Colonies.js"
import { Minerals } from "./Minerals.js"
import { SpaceCart } from "./SpaceCart.js"
const mainContainer = document.querySelector(".container")

// renderAllHTML needed for growth of application
const renderAllHTML = () => {
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    Colonies()
    Minerals()
    SpaceCart()


})

// event listener that listens for submit button, to then re-render page
// with updated resource totals.