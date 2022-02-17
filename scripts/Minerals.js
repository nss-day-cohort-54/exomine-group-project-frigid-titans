// import getMinerals and setMinerals
// HTML string to display available minerals in a facility as radio buttons
// event listener change or click for radio button selection
// once selected, the selected would be displayed in SpaceCart (click)
import { getMinerals, setMineral, getFacilityMinerals, findTransientState, getFacilities } from "./database.js"
import { SpaceCart } from "./SpaceCart.js"



// Create an filtered array of facilityMinerals of the selected facility

export const filteredFacilityMinerals = (facility) => {
    const facilityMinerals = getFacilityMinerals()
    let facilityMineralArray = []
    
    for (const facilityMineral of facilityMinerals) {
        if (facilityMineral.facilityId === facility.id)
        
        facilityMineralArray.push(facilityMineral)
    }
    return facilityMineralArray
}

// Returns an HTML list String via string interpolation
export const Minerals = () => {
    const minerals = getMinerals()
    // might have to cange to reflect mutiple facility selection
    const foundObject = findTransientState()

    const facilities = getFacilities()

    const mineralContainer = document.querySelector(".minerals")

    const foundFacility = facilities.find((facility) => {
                                // change with regard to multiple facility selection
        return facility.id === foundObject.selectedFacility
    })
    if (foundObject.selectedFacility === foundFacility?.id) {
        let html = `<h2>Facility Minerals of ${foundFacility.name}</h2><br>`
        html += "<ul>"

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
        mineralContainer.innerHTML = html
    } else if (foundFacility === undefined) {
        mineralContainer.innerHTML = `<h2>Facility Minerals</h2>`
    }

}




document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            // set multiple mineral IDs to stransient state
            setMineral(parseInt(event.target.value))

            SpaceCart()
        }
    }
)

