import { getColonies, getColonyMinerals, getFacilityMinerals, findTransientState, getFacilities, getMinerals, getGovernors, purchaseMineral, findTFM  } from "./database.js";
import { Colonies } from "./Colonies.js";
import { Minerals } from "./Minerals.js";

// export const SpaceCart = () => {
//     const spaceCartContainer = document.querySelector(".spaceCartHTML")
//     const foundObject = findTransientState()
    
//     const facilities = getFacilities()

//     const minerals = getMinerals()
    
//     const foundFacility = facilities.find((facility) => {
//         return facility.id === foundObject.facilityId
//     })

//     //reformat this to be able to display multiple selected minerals
//     //iterate through transient state

//     let innerHTML = "<ul>"
//     // iterate through list of minerals
//     for (const mineral of minerals) {
//         // to find if the value of the change event target is equal to a mineralId
//         if (foundObject.selectedMineral === mineral.id) {
//             //    if equal, return html with mineral radio button inputs
//             innerHTML += `<li>1 ton of ${mineral.name} from ${foundFacility.name}</li>`
//             // return mineralContainer.innerHTML = mineralHTML
//         } else if (foundObject.selectedMineral === undefined) {
//             innerHTML += "</ul>"
//         }
        
//     } 
//     spaceCartContainer.innerHTML = innerHTML
// }

export const SpaceCart = (facilityMineralObj) => {
    const spaceCartContainer = document.querySelector(".spaceCartHTML")
    // change to reflect multiple facility mineral selections
    // const transientFacilityMineralArray = findTransientFacilityMinerals()
    const facilities = getFacilities()
    const minerals = getMinerals()
    // const facilityMinerals = getFacilityMinerals()
    // const filiteredArray = filteredFacilityMineralArray(transientFacilityMineralArray,facilityMinerals)
    if (!facilityMineralObj) {
        return ""
    }
    let innerHTML = "<ul>"
    // iterate through cart objects
    // iterate through list of minerals
            const foundFacility = facilities.find((facility) => {
                // change to reflect found facility
                return facility.id === facilityMineralObj.facilityId
            })
            for (const mineral of minerals) {
                // to find if the value of the change event target is equal to a mineralId
                if (facilityMineralObj.mineralId === mineral.id) {
                    //    if equal, return html with mineral radio button inputs
                    innerHTML += `<li>1 ton of ${mineral.name} from ${foundFacility.name}</li>`
                    // return mineralContainer.innerHTML = mineralHTML
                } else if (facilityMineralObj.mineralId === undefined) {
                    innerHTML += ""
                }
            }
            innerHTML += `</ul>`
            spaceCartContainer.innerHTML += innerHTML
        }


