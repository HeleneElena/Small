const initState = {
    albums: [
        {
            "id": 1,
            "title": "Wretch",
            "year": 1991
        },
        {
            "id": 2,
            "title": "Blues for the Red Sun",
            "year": 1992
        },
        {
            "id": 3,
            "title": "Welcome to Sky Valley",
            "year": 1994
        },
        {
            "id": 4,
            "title": "...And the Circus Leaves Town",
            "year": 1995
        }
    ]
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case "ALBUM_ADD":
            return {
                ...state, // wichtig bei mehreren Eigenschaften im state-Objekt
                albums: [...state.albums, action.payload]
                // action.payload = neues Objekt
            }
        case "ALBUM_DEL":
            const newArr = state.albums.filter((ele, index) => {
                return index != action.payload
                // action.payload = Index
            })
            return {
                ...state,
                albums: newArr
            }
        default:
            return state
    }
}

export default reducer