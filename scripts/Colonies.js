// import get Colonies
import {getColonies, getColonyMinerals, getGovernors} from "./database.js"

const colonies = getColonies();
const governors = getGovernors();
const minerals = getColonyMinerals();

// Html string that displays the amount of colony resources
export const Colonies = (governorId) => {
    let governor= governors.find(gov => gov.id=== parseInt(governorId))
    for (const colony of colonies) {
    if (governor?.colonyId === colony.id){
        let html = `<h2> ${colony.name} Minerals </h2>`
        html += `<ul>`
        // if amount is 0, dont display.
        if( colony.id === minerals.colonyId && minerals.mineralAmount > 0){
            for (const mineral of minerals) {
                `<li>${mineral.mineralAmount} ${mineral.name} <li>`
            }
        }
        html += `</ul>`

        
        return html
        
    } else if (governor === undefined) {
        return `<h2> Colony Minerals </h2>`
    }
}

}