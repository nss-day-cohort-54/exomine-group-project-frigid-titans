// import get Colonies
import { getColonies, getColonyMinerals, getGovernors, findTransientState } from "./database.js"

const colonies = getColonies();
const governors = getGovernors();
const minerals = getColonyMinerals();

// Html string that displays the amount of colony resources
export const Colonies = () => {
    const transientState = findTransientState();

    let governor = governors.find(gov => gov.id === parseInt(transientState.selectedGovernor))
    for (const colony of colonies) {
        if (governor?.colonyId === colony.id) {
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