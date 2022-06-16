import {cartReducer} from ".";

describe("testing cart", () => {
  it("should set cart when a value is updated", () => {
    const initialState = [];

    const setCart = {
      type: "SET_CART",
      payload: [{
        _id: 3,
        title: "Handmade sanitizer",
        price: "250",
        originalPrice: "400",
        rating: {
          value: "4.7",
          count: "23654"
        },
        categoryName: "Sanitizer",
        dealOfTheDay: true,
        outOfStock: false
      }]};

    const state = cartReducer(initialState, setCart);
    
    const expectedResult = {
        _id: 3,
        title: "Handmade sanitizer",
        price: "250",
        originalPrice: "400",
        rating: {
          value: "4.7",
          count: "23654"
        },
        categoryName: "Sanitizer",
        dealOfTheDay: true,
        outOfStock: false
    };

    expect(state).toContainEqual(expectedResult);
  });
});
