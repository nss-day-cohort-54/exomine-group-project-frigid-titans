// import getMinerals and setMinerals
// HTML string to display available minerals in a facility as radio buttons
// event listener change or click for radio button selection
    // once selected, the selected would be displayed in SpaceCart (click)
import { getMinerals, setMineral, getFacilityMinerals, findTransientState, getFacilities } from "./database.js"

const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()

// Create an filtered array of facilityMinerals of the selected facility

export const filteredFacilityMinerals = (facility) => {
    
    let facilityMineralArray = []

    for (const facilityMineral of facilityMinerals) {
        if (facilityMineral.facilityId === facility.id)
        
        facilityMineralArray.push(facilityMineral)
    }
    return facilityMineralArray
}

// Returns an HTML list String via string interpolation
export const Minerals = (selectedFacility) => {
    let html = "<ul>"
    
    const filteredMineralArray = filteredFacilityMinerals(selectedFacility)
    
    filteredMineralArray.forEach((filteredMineral) => {

        for (const mineral of minerals) {
            if (filteredMineral.mineralId === mineral.id) {
                html += 
            `<li> 
            <input type="radio" name="mineral" value="${mineral.id}" /> 
            ${filteredMineral.mineralAmount} tons of ${mineral.name}
            </li>`
            }           
        }
    })
    html += "</ul>"
return html

}
// create a function that passes the selected mineral as an object
// 
const findFacility = (mineralObj) => {

}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            
            const spaceCartContainer = document.querySelector(".spaceCartHTML")
            
            setMineral(parseInt(event.target.value))
            
            const mineralId = parseInt(event.target.value)

            const facilities = getFacilities()
            const minerals = getMinerals()
            
            const foundObject = findTransientState()
            let innerHTML = ""
            // iterate through list of minerals
            for (const mineral of minerals) {
                // to find if the value of the change event target is equal to a mineralId
                if (mineralId === mineral.id) {
                    //    if equal, return html with mineral radio button inputs
                    innerHTML += `1 ton of ${mineral.name} from `
                    // return mineralContainer.innerHTML = mineralHTML
                } 
            }
            spaceCartContainer.innerHTML = innerHTML
        }
    }
)

//         ${
//             // iterates(?) through Mineral array
//             filteredMinerals.map(
//                 if (filteredMinerals.id === mineral.id) {
//                 // for each vegetable object, return's a list item string
//                 // setting the value attribute equal to the id property of each mineral object
//                 // and the visible HTML(?) equal to the type property of that object
//                 (mineral) => {
//                     return `<li>
//                                 <input type="radio" name="mineral" value="${mineral.id}" /> ${mineral.type}
//                             </li>`
//                 }
//             //the join property is then invoked to join each list item into one string 
//                 }
//             ).join("")
//         }
//     </ul>
//     `    
// }