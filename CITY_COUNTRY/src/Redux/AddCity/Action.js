export function AddCity(val) {
    return {
        type: "Add_City",
        payload : val
    }
}
export function AddNewCity(val) {
    return {
      type: "AddNewCity",
      payload: val,
    };
}
export function SortByPopulation(val) {
    return {
        type: "Sort",
        payload : val
    }
}
export function EditCity(val) {
    return {
        type: "Edit_City",
        payload : val
    }
}
export function DeleteCity(val) {
    return {
        type: "Delete",
        payload : val
    }
}
export function getCityData() {
    async (dispatch) => {
        const res = await fetch(`http://localhost:8080/citydata`);
        const CityData = await res.json();
        console.log(CityData)
        dispatch(AddCity(CityData));
    }
}