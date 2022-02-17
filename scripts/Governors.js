// import getGovernors setGovernors()
import { getGovernors, setGovernor, getColonies } from "./database.js"
const governors = getGovernors();
// import colonies module (Colonies())
const colonies = getColonies();
import { Colonies } from "./Colonies.js";

// Define and export a function that 
// and returns an HTML string for a drop down selection menu
// condtional that determines if governor is active
export const Governors = () => {
    let html = '<select id="governors">'
    html += '<option value="0">Select governor</option>'
    
    // iterates through the list of governors
    for (const governor of governors) {
        // conditional that determines if governor is active
        // if inactive, do not display
        if (governor.active === true) {
            html += `<option value="${governor.id}">${governor.name}</option>`
        }
    }

    html += "</select>"
    return html

}

// Create event listener that listens for change or click event int the governor selection
//calls a function that displays the governors colony and its resources (Colonies())
document.addEventListener(
    "change",
    (event) => {
        // // if governor.colonyId === colony ID, display
        if (event.target.id === "governors") {
            setGovernor(parseInt(event.target.value))
            const colonyContainer = document.querySelector(".colony")
            colonyContainer.innerHTML = Colonies()
            
        }
    }
)