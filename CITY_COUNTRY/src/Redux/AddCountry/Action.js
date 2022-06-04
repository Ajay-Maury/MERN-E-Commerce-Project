export function AddCountry(val) {
    return {
        type: "Add_Country",
        payload : val
    }
};

export function AddNewCountry(val) {
    return {
        type: "AddNewCountry",
        payload : val
    }
};

export const getCountryData = () => {
    async (dispatch) => {
        const res = await fetch(`http://localhost:8080/countryData`);
        const CountryData = await res.json()
        console.log(CountryData)
        dispatch(AddCountry(CountryData))
    }
}