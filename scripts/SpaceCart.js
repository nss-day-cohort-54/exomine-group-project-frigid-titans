import { getColonies, getColonyMinerals, getFacilityMinerals, findTransientState, getFacilities, getMinerals, getGovernors, purchaseMineral } from "./database.js";
import { Colonies } from "./Colonies.js";
import { Minerals } from "./Minerals.js";

export const SpaceCart = (foundObject, mineralId) => {

    const facilities = getFacilities()

    const minerals = getMinerals()
    const foundFacility = facilities.find((facility) => {
        return facility.id === foundObject.selectedFacility
    })

    let innerHTML = ""
    // iterate through list of minerals
    for (const mineral of minerals) {
        // to find if the value of the change event target is equal to a mineralId
        if (mineralId === mineral.id) {
            //    if equal, return html with mineral radio button inputs
            innerHTML += `1 ton of ${mineral.name} from ${foundFacility.name}`
            // return mineralContainer.innerHTML = mineralHTML
        }
    } 
    return innerHTML
}

export const MineralMath = () => {
    
    const facilityMinerals = getFacilityMinerals()

    const governors = getGovernors()

    const colonyMinerals = getColonyMinerals()

    const foundObject = findTransientState()

    facilityMinerals.find((facilityMineral) => {
        if (foundObject.selectedFacility === facilityMineral.facilityId &&
            foundObject.selectedMineral === facilityMineral.mineralId) {
                return facilityMineral.mineralAmount--
            }
    })

    const foundGov = governors.find((gov) => {
        return foundObject.selectedGovernor === gov.id
    })

    colonyMinerals.find((colonyMineral) => {
        if (foundObject.selectedMineral === colonyMineral.mineralId &&
            foundGov.colonyId === colonyMineral.colonyId) {
                return colonyMineral.mineralAmount++
            }
    })
    
    // const colonyContainer = document.querySelector(".colony")
    //         colonyContainer.innerHTML = Colonies(foundGov)

    // purchaseMineral()


}

// DEfine and Export a function

// that displays the minerals selected HTML


// Define function that adds minerals to colonies and subtracts from facilities
// mineralMath()
// return facilityMineral.amount and colonyMineral.amount

// 

// event listener for submit order button
    // calls mineralMath(function)

