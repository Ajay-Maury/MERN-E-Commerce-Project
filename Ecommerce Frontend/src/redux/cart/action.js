import axios from "axios";

export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAILURE = "FETCH_CART_FAILURE";




const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST,
  };
};

const fetchCartSuscess = (data) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload: data,
  };
};

const fetchCartFailure = (error) => {
  return {
    type: FETCH_CART_FAILURE,
    payload: error,
  };
};

export const fetchCartData = (id) => {
  return function (dispatch) {
    // console.log("xsdxd",id)
    dispatch(fetchCartRequest());
    // axios(`https://mern-e-commerce-api-v-0.herokuapp.com/cart/${id}`)
    axios(`http://localhost:5000/cart/user/${id}`)
      .then((response) => {
        // console.log("RDE", response.data);
        dispatch(
          fetchCartSuscess({
            Data: response.data.Cart[0].products,
            Id: response.data.Cart[0]._id,
            userId: response.data.Cart[0].userId,
            TotalPrice : response.data.TotalPrice,
            TotalProducts : response.data.TotalProducts,
          })
        )
      }
      )
      .catch((error) => dispatch(fetchCartFailure(error.message)));
  };
};


