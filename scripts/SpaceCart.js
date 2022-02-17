import { getColonies, getColonyMinerals, getFacilityMinerals, findTransientState, getFacilities, getMinerals, getGovernors, purchaseMineral } from "./database.js";
import { Colonies } from "./Colonies.js";
import { Minerals } from "./Minerals.js";

export const SpaceCart = () => {
    const spaceCartContainer = document.querySelector(".spaceCartHTML")
    
    // change to reflect multiple facility mineral selections
    const foundObject = findTransientState()
    
    const facilities = getFacilities()

    const minerals = getMinerals()
    
    const foundFacility = facilities.find((facility) => {
                                // change to reflect found facility
        return facility.id === foundObject.selectedFacility
    })

    let innerHTML = ""
    // iterate through cart objects
    // iterate through list of minerals
    for (const mineral of minerals) {
        // to find if the value of the change event target is equal to a mineralId
        if (foundObject.selectedMineral === mineral.id) {
            //    if equal, return html with mineral radio button inputs
            innerHTML += `1 ton of ${mineral.name} from ${foundFacility.name}`
            // return mineralContainer.innerHTML = mineralHTML
        } else if (foundObject.selectedMineral === undefined) {
            innerHTML += ""
        }
        
    } 

    spaceCartContainer.innerHTML = innerHTML
}

