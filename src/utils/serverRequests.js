import axios from "axios";

export const getCart = async(dispatch) => {
  try{
    const {status, data} = await axios({
      method: "get",
      url: "/api/user/cart",
      headers: {authorization: localStorage.getItem("encodedToken")}
    });
    console.log("Calling api get cart");
    if(status===200){
      dispatch({type:"SET_CART", payload: data.cart})
    }
  }catch(err){
    console.log(err);
  }
}

export const addToCart = async(postData, dispatch) => {
    try{
      const {status, data} = await axios({
        method: "post",
        url: "/api/user/cart",
        data: {product: postData},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      console.log("Calling api add to cart");
      if(status===201){
        dispatch({type:"SET_CART", payload: data.cart})
      }
    }catch(err){
      console.log(err);
    }
}

export const removeFromCart = async(id, dispatch) => {
    try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/cart/${id}`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      console.log("Calling api remove from cart");
      if(status===200){
        dispatch({type:"SET_CART", payload: data.cart})
      }
    }catch(err){
      console.log(err);
    }
}