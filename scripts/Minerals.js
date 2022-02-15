// import getMinerals and setMinerals
// HTML string to display available minerals in a facility as radio buttons
// event listener change or click for radio button selection
    // once selected, the selected would be displayed in SpaceCart (click)
import { getMinerals, setMineral, getFacilityMinerals } from "./database.js"

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

// const filteredMinerals = filteredFacilityMinerals()

// define a function that returns the specific nimeral name for the facilitymineral.mineralId property
// export const getMineralNames = (filteredFacilitiesArray) => {
//     let mineralNames = ""

//     for (const facilityMineral of filteredFacilitiesArray) {
//         for (const mineral of minerals) {
//             if (facilityMineral.mineralId === mineral.id) {
//                 mineralNames += mineral.name
//                 mineralNames += ""
//             }
            
//         }
        
//     }

// }

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

// filteredMineralArray.forEach((filteredMineral) => {
//     for (const mineral of mineral) {
//         if (filteredMineral.mineralId === mineral.id) {
//             html += 
//         `<li> 
//         <input type="radio" name="mineral" value="${mineral.id}" /> 
//         ${filteredMineral.mineralAmount} tons of ${mineral.name}
//         </li>`
//         }
        
//     }
// })

    
    
    
    
    
    
//     return `<ul>   
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