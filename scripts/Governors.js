// import getGovernors setGovernors()
import {getGovernors, setGovernor} from "./database.js"
// import colonies module (Colonies())
import {Colonies} from "./colonies.js"
// Define and export a function that 
// iterates through the list of governors
// and returns an HTML string for a drop down selection menu
    // condtional that determines if governor is active
    // if inactive, do not display
export const Governors = () => {
    const governors = getGovernors();
        let html = '<select id="governors">'
        html += '<option value="0">Select governor</option>'
    
        for (const governor of governors) {
            html += `<option value="${governor.id}">${governor.name}</option>`
        }
    
        html += "</select>"
        return html
        
}
//when governor is selected, 
// the associated colony's name and resources will appear 
// // if governor.colonyId === colony ID, display

// Create event listener that listens for change or click event int the governor selection
    //calls a function that displays the governors colony and its resources (Colonies())
    document.addEventListener(
        "change",
        (event) => {
            if (event.target.id === "governors") {
                setGovernor(parseInt(event.target.value))  
            }
        }
    )