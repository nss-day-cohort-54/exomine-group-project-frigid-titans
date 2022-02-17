// import get Colonies
import { getColonies, getColonyMinerals, getGovernors, findTransientState } from "./database.js"

//set variables to the get function so it has access to data
const colonies = getColonies();
const governors = getGovernors();
const minerals = getColonyMinerals();

// Html string that displays the amount of colony resources
export const Colonies = () => {
    //find transient state needs to be in function so when invoked later it still works
    const transientState = findTransientState();

    //finds the governor that matches the governor selected and sent to transient state.
    let governor = governors.find(gov => gov.id === parseInt(transientState.selectedGovernor))
    //iterates through the list of colonies
    for (const colony of colonies) {
        //finds the colony id that is equal to the governor's colonyId Fk
        if (governor?.colonyId === colony.id) {
            //creates the html to be displayed by the Colonies function
            let html = `<h2> ${colony.name} Minerals </h2>`
            html += `<ul>`
            for (const mineral of minerals) {
                // if amount is 0, dont display.
                if (colony.id === mineral.colonyId && mineral.mineralAmount > 0) {
                    html += `<li>${mineral.mineralAmount} ${mineral.name} <li>`
                }
            }
            html += `</ul>`


            return html

        } else if (governor === undefined) {
            return `<h2> Colony Minerals </h2>`
        }
    }

}