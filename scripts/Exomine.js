import { Governors } from "./Governors.js"
import { MineralMath } from "./SpaceCart.js"
import { Facilities } from "./Facilities.js"
// Define and export a function that contains the entire HTML

export const Exomine = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <article class="purchaser__selection">
        <section class="governors">
        <label class="label" for="governorSelection">Choose A Governor</label>
            ${Governors()}
        </section>
        <section class="colony">
            <h2> Colony Minerals </h2>
        </section>
    </article>
    <article class="provider__selection">
        <section class="facilities">
        <label class="label" for="facilitySelection">Choose A Facility</label>
            ${Facilities()}
        </section>
    </article>
    <article class="mineral__selection">
        <section class="minerals">
            <h2>Facility Minerals</h2>
        </section>
        <section class="spaceCart">
        <h3>Space Cart</h3>
        <div class="spaceCartHTML"></div>
         
        <button id="purchase">Purchase Mineral</button>
        </section>
    </article>
    `
}

document.addEventListener(
    "click",
    (clickEvent) => {
        // set a variable equal to click target
        const buttonClicked = clickEvent.target
        // if this thing happens
        if (buttonClicked.id === "purchase") {
            // then call this function
            MineralMath()
        }
    }
)



// for the body of the website
    //contains the component functions for
        //Governor drop down selection (Governors())
        // drop down for facilities selection (Facilities())
        // Mineral purchase Function and button (Orders())