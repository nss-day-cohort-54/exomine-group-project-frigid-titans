// Define and export a function that contains the entire HTML

export const Exomine = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <article class="purchaser__selection">
        <section class="governors">
        <label class="label" for="governorSelection">Choose A Governor</label>
            governor function go here
        </section>
        <section class="colony">
            colony function go here
        </section>
    </article>
    <article class="provider__selection">
        <section class="facilities">
        <label class="label" for="facilitySelection">Choose A Facility</label>
            facility selection function goes here
        </section>
    </article>
    <article class="mineral__selection">
        <section class="minerals">
            mineral function goes here
        </section>
        <section class="spaceCart">
        <h3>Space Cart</h3>
            space cart function goes here
        <button id="purchase">Purchase Mineral</button>
        </section>
    </article>
    `
}
// for the body of the website
    //contains the component functions for 
        //Governor drop down selction (Governors()) 
        // drop down for faclities selection (Facilities())
        // Mineral purchase Function and button (Orders())