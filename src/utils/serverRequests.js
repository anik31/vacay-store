import axios from "axios";

export const getCart = async(dispatch) => {
  try{
    const {status, data} = await axios({
      method: "get",
      url: "/api/user/cart",
      headers: {authorization: localStorage.getItem("encodedToken")}
    });
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
      if(status===200){
        dispatch({type:"SET_CART", payload: data.cart})
      }
    }catch(err){
      console.log(err);
    }
}

export const updateItemQuantity = async(id, dispatch, updateType) => {
    try{
      const {status, data} = await axios({
        method: "post",
        url: `/api/user/cart/${id}`,
        data: {action: {type: updateType}},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_CART", payload: data.cart})
      }
    }catch(err){
      console.log(err);
    }
}

export const getWishlist = async(dispatch) => {
  try{
    const {status, data} = await axios({
      method: "get",
      url: "/api/user/wishlist",
      headers: {authorization: localStorage.getItem("encodedToken")}
    });
    if(status===200){
      dispatch({type:"SET_WISHLIST", payload: data.wishlist})
    }
  }catch(err){
    console.log(err);
  }
}

export const addToWishlist = async(postData, dispatch) => {
    try{
      const {status, data} = await axios({
        method: "post",
        url: "/api/user/wishlist",
        data: {product: postData},
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===201){
        dispatch({type:"SET_WISHLIST", payload: data.wishlist})
      }
    }catch(err){
      console.log(err);
    }
}

export const removeFromWishlist = async(id, dispatch) => {
    try{
      const {status, data} = await axios({
        method: "delete",
        url: `/api/user/wishlist/${id}`,
        headers: {authorization: localStorage.getItem("encodedToken")}
      });
      if(status===200){
        dispatch({type:"SET_WISHLIST", payload: data.wishlist})
      }
    }catch(err){
      console.log(err);
    }
}