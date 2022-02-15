// import get Colonies
import {getColonies, getColonyMinerals, getGovernors} from "./database.js"

const colonies = getColonies();
const governors = getGovernors();
const minerals = getColonyMinerals();

// Html string that displays the amount of colony resources
export const Colonies = (governor) => {
    for (const colony of colonies) {
    if (governor.colonyId === colony.id){
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

    }else{
        let html =`<h2> Colony Minerals </h2>`
        return html
    }
    }

}