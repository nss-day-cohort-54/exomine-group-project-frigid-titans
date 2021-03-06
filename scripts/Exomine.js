import { Governors } from "./Governors.js"

import { Facilities } from "./Facilities.js"
import { purchaseMineral } from "./database.js"
import { Colonies } from "./Colonies.js"
import { Minerals } from "./Minerals.js"
import { SpaceCart } from "./SpaceCart.js"
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
        <section class="minerals_container">
            <div class="mineral_header"><h2>Facility Minerals</h2></div>
            <div class="minerals"></div>
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
            // 
            // purchase function
            purchaseMineral()
            Colonies()
            Minerals()
            SpaceCart()
        }
    }
)



