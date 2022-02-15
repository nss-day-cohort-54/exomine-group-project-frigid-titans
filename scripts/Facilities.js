// import getFAcilities setFacilities()
import { getFacilities, setFacility } from "./database.js";
import { Minerals } from "./Minerals.js";

// import Minerals module (Minerals())()

// Define and export a function that 
// iterates through the list of FAcilities
export const Facilities = () => {
    const facilities = getFacilities()

    let html = '<select id="facilities">'
    html += '<option value="0">Select Facility</option>'
    // conditional determining if facility is active 
    // if inactive, do not display
    // and returns an HTML string for a drop down selection menu
    for (const facility of facilities) {
        if (facility.active === true) {
            html += `<option value="${facility.id}">${facility.name}</option>`
        }
    }
    html += "</select>"
    return html
}


// Create event listener that listens for change or click event in the governor selection
//calls a function that displays the Facilities resources (Minerals())
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "facilities") {
            const mineralContainer = document.querySelector(".minerals")
            setFacility(parseInt(event.target.value))
            
            const facilities = getFacilities()
            let innerHTML = ""
            // iterate through list of facilities
            for (const facility of facilities) {
                // to find if the value of the change event target is equal to a facility Id
                if (parseInt(event.target.value) === facility.id) {
                //    if equal, return html with mineral radio button inputs
                    innerHTML += `<h2>Facility Minerals of ${facility.name}</h2><br>
                                ${Minerals(facility)}`
                    // return mineralContainer.innerHTML = mineralHTML
                } else  {
                    innerHTML += `<h2>FacilityMinerals</h2>`}

            }
            mineralContainer.innerHTML = innerHTML
        }
    }
)