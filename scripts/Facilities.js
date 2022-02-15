// import getFAcilities setFacilities()
import { getFacilities, setFacility } from "./database.js";
import { Minerals } from "./Minerals.js";
const facilities = getFacilities()
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
        if (facility.active === true){
            html += `<option value="${facility.id}">${facility.name}</option>`
        }
    } 
    html += "</select>"
    return html
}


// Create event listener that listens for change or click event in the governor selection
    //calls a function that displays the Facilities resources (Minerals())
const mineralContainer = document.querySelector(".minerals")
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "facilities") {
            setFacility(parseInt(event.target.value))  
            for (const facility of facilities) {
                if (parseInt(event.target.value) === facility.id){
                    html = `<h2>Facility Minerals of ${facility.name}</h2><br>
                    ${Minerals(facility)}`
                } else html = `<h2>FacilityMinerals</h2>`
            }
            return html
        }
        }
    )