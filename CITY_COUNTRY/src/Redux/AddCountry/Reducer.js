const initialState = { AddCountry: [] }

export const AddCountryReducer = (
    store = initialState , {type,payload}
) => {
    switch (type) {
        case "Add_Country": {
            return {
                ...store, AddCountry: [...payload]
            };
        }
        case "AddNewCountry": {
            return {
                ...store, AddCountry: [...store.AddCountry, payload]
            }
        };
            default: return store
    }
}