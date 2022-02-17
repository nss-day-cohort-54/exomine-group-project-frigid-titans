// import getMinerals and setMinerals
// HTML string to display available minerals in a facility as radio buttons
// event listener change or click for radio button selection
// once selected, the selected would be displayed in SpaceCart (click)
import { getMinerals, setMineral, getFacilityMinerals, findTransientState, getFacilities } from "./database.js"
import { SpaceCart } from "./SpaceCart.js"

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
export const Minerals = () => {
    const foundObject = findTransientState()

    const facilities = getFacilities()

    const foundFacility = facilities.find((facility) => {
        return facility.id === foundObject.selectedFacility
    })

    let html = "<ul>"

    const filteredMineralArray = filteredFacilityMinerals(foundFacility)

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

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {

            const spaceCartContainer = document.querySelector(".spaceCartHTML")

            setMineral(parseInt(event.target.value))

            spaceCartContainer.innerHTML = `${SpaceCart()}`
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