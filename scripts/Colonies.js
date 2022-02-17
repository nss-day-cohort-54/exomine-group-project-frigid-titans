// import get Colonies
import { getColonies, getColonyMinerals, getGovernors, findTransientState, getMinerals } from "./database.js"

//set variables to the get function so it has access to data

// Html string that displays the amount of colony resources
export const Colonies = () => {
    //find transient state needs to be in function so when invoked later it still works
    const transientState = findTransientState();
    const colonyMinerals = getColonyMinerals();
    const colonies = getColonies();
    const governors = getGovernors();
    const minerals = getMinerals();

    const colonyContainer = document.querySelector(".colony")
    //finds the governor that matches the governor selected and sent to transient state.
    let governor = governors.find(gov => gov.id === parseInt(transientState.selectedGovernor))
    //iterates through the list of colonies
    for (const colony of colonies) {
        //finds the colony id that is equal to the governor's colonyId Fk
        if (governor?.colonyId === colony.id) {
            //creates the html to be displayed by the Colonies function
            let html = `<h2> ${colony.name} Minerals </h2>`
            html += `<ul>`
            for (const colonyMineral of colonyMinerals) {
                // if amount is 0, dont display.
                if (colony.id === colonyMineral.colonyId && colonyMineral.mineralAmount > 0) {
                    for (const mineral of minerals) {
                        if (colonyMineral.mineralId === mineral.id) {
                            html += `<li>${colonyMineral.mineralAmount} ${mineral.name} <li>`
                        }
                    }
                }
            }
            html += `</ul>`



            colonyContainer.innerHTML = html

        } else if (governor === undefined) {
            colonyContainer.innerHTML = `<h2> Colony Minerals </h2>`
        }
    }


}