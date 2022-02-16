import { getColonyMinerals, getFacilityMinerals, findTransientState, getFacilities, getMinerals } from "./database.js";

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
    } return innerHTML
}


// DEfine and Export a function

// that displays the minerals selected HTML


// Define function that adds minerals to colonies and subtracts from facilities
// mineralMath()

// 

// event listener for submit order button
    // calls mineralMath(function)

