const database = {
    governors: [
        {
            id: 1,
            name: 'Bill Spacemen',
            colonyId: 1,
            active: true
        },
        {
            id: 2,
            name: 'Tammy Moonshart',
            colonyId: 4,
            active: true
        },
        {
            id: 3,
            name: 'Grady MacMorrison',
            colonyId: 3,
            active: false
        },
        {
            id: 4,
            name: 'Trey Cool',
            colonyId: 2,
            active: true
        },
        {
            id: 5,
            name: 'Wanda Merriweather',
            colonyId: 3,
            active: true
        },
    ],
    colonies: [
        {
            id: 1,
            name: "Billsville"
        },
        {
            id: 2,
            name: "Moontown"
        },
        {
            id: 3,
            name: "The Sun"
        },
        {
            id: 4,
            name: "Spaceworld"
        },
    ],
    minerals: [
        {
            id: 1,
            name: "Foamium"
        },
        {
            id: 2,
            name: "Xenon"
        },
        {
            id: 3,
            name: "Kevin"
        },
        {
            id: 4,
            name: "Iron"
        },
        {
            id: 5,
            name: "Rocksalt"
        },
        {
            id: 6,
            name: "Nerdium"
        }
    ],
    facilities: [
        {
            id: 1,
            name: "Sealab",
            active: true
        },
        {
            id: 2,
            name: "Moond Base 24",
            active: true
        },
        {
            id: 3,
            name: "Crest of Landon",
            active: false
        },
        {
            id: 4,
            name: "Stargate 46-B",
            active: true
        },
        {
            id: 5,
            name: "Cinco Entertainment",
            active: true
        },
        {
            id: 6,
            name: "Rock City",
            active: true
        },
    ],
    facilityMinerals: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 1,
            mineralAmount: 50
        },
        {
            id: 2,
            facilityId: 1,
            mineralId: 3,
            mineralAmount: 40
        },
        {
            id: 3,
            facilityId: 2,
            mineralId: 2,
            mineralAmount: 65
        },
        {
            id: 4,
            facilityId: 2,
            mineralId: 4,
            mineralAmount: 35
        },
        {
            id: 5,
            facilityId: 3,
            mineralId: 3,
            mineralAmount: 45
        },
        {
            id: 6,
            facilityId: 3,
            mineralId: 5,
            mineralAmount: 30
        },
        {
            id: 7,
            facilityId: 4,
            mineralId: 4,
            mineralAmount: 70
        },
        {
            id: 8,
            facilityId: 4,
            mineralId: 6,
            mineralAmount: 20
        },
        {
            id: 9,
            facilityId: 5,
            mineralId: 1,
            mineralAmount: 80
        },
        {
            id: 10,
            facilityId: 5,
            mineralId: 6,
            mineralAmount: 45
        },
        {
            id: 11,
            facilityId: 6,
            mineralId: 5,
            mineralAmount: 90
        },
        {
            id: 12,
            facilityId: 6,
            mineralId: 4,
            mineralAmount: 25
        },
    ],
    colonyMinerals: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 1,
            mineralAmount: 0
        },
        {
            id: 2,
            colonyId: 1,
            mineralId: 2,
            mineralAmount: 0
        },
        {
            id: 3,
            colonyId: 1,
            mineralId: 3,
            mineralAmount: 0
        },
        {
            id: 4,
            colonyId: 1,
            mineralId: 4,
            mineralAmount: 0
        },
        {
            id: 5,
            colonyId: 1,
            mineralId: 5,
            mineralAmount: 0
        },
        {
            id: 6,
            colonyId: 1,
            mineralId: 6,
            mineralAmount: 0
        },
        {
            id: 7,
            colonyId: 2,
            mineralId: 1,
            mineralAmount: 0
        },
        {
            id: 8,
            colonyId: 2,
            mineralId: 2,
            mineralAmount: 0
        },
        {
            id: 9,
            colonyId: 2,
            mineralId: 3,
            mineralAmount: 0
        },
        {
            id: 10,
            colonyId: 2,
            mineralId: 4,
            mineralAmount: 0
        },
        {
            id: 11,
            colonyId: 2,
            mineralId: 5,
            mineralAmount: 0
        },
        {
            id: 12,
            colonyId: 2,
            mineralId: 6,
            mineralAmount: 0
        },
        {
            id: 13,
            colonyId: 3,
            mineralId: 1,
            mineralAmount: 0
        },
        {
            id: 14,
            colonyId: 3,
            mineralId: 2,
            mineralAmount: 0
        },
        {
            id: 15,
            colonyId: 3,
            mineralId: 3,
            mineralAmount: 0
        },
        {
            id: 16,
            colonyId: 3,
            mineralId: 4,
            mineralAmount: 0
        },
        {
            id: 17,
            colonyId: 3,
            mineralId: 5,
            mineralAmount: 0
        },
        {
            id: 18,
            colonyId: 3,
            mineralId: 6,
            mineralAmount: 0
        },
        {
            id: 19,
            colonyId: 4,
            mineralId: 1,
            mineralAmount: 0
        },
        {
            id: 20,
            colonyId: 4,
            mineralId: 2,
            mineralAmount: 0
        },
        {
            id: 21,
            colonyId: 4,
            mineralId: 3,
            mineralAmount: 0
        },
        {
            id: 22,
            colonyId: 4,
            mineralId: 4,
            mineralAmount: 0
        },
        {
            id: 23,
            colonyId: 4,
            mineralId: 5,
            mineralAmount: 0
        },
        {
            id: 24,
            colonyId: 4,
            mineralId: 6,
            mineralAmount: 0
        },
    ],
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

