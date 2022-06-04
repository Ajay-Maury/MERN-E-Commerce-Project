const initialState = { AddCity: [] }

export const AddCityReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case "Add_City":
            return {
                ...store, AddCity: [...payload]
            };
        case "AddNewCity":
            return {
                ...store, AddCity: [...store.AddCity, payload]
            };
        case "Sort":
            return {
                ...store, AddCity: [...store.AddCity].sort((a, b) => {
                    return (payload==="Asc"?(a,population - b.population):(b.population - a.population))
                })
            }
        case "Edit_City":
            return {
                ...store, AddCity: [...store.AddCity].map(e => (e.id === payload.id) ? payload : e)
            };
        case "Delete":
            return {
                ...store, AddCity: [...store.AddCity].filter(e => e.id !== payload.id)
            };
        default: 
            return store
    }
}