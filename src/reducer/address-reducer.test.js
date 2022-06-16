import {addressReducer} from ".";

describe("testing address", () => {
  it("should set address when a value is added", () => {
    const initialState = [];

    const setAddress = {
      type: "SET_ADDRESS",
      payload: [{
        _id: "27d94942-cd9b-4137-a0bd-39296b8a6bd2",
        name: "Aniket Prakash",
        street: "Near MKC High School",
        city: "Keonjhar",
        state: "Odisha",
        pincode: "411001"
    }]};

    const state = addressReducer(initialState, setAddress);
    
    const expectedResult = {
        _id: "27d94942-cd9b-4137-a0bd-39296b8a6bd2",
        name: "Aniket Prakash",
        street: "Near MKC High School",
        city: "Keonjhar",
        state: "Odisha",
        pincode: "411001"
      };

    expect(state).toContainEqual(expectedResult);
  });
});
