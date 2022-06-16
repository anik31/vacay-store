import {wishlistReducer} from ".";

describe("testing wishlist", () => {
  it("should set wishlist when a value is updated", () => {
    const initialState = [];

    const setWishlist = {
      type: "SET_WISHLIST",
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

    const state = wishlistReducer(initialState, setWishlist);
    
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
