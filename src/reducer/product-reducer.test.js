import {productReducer} from ".";

describe("testing products & filters", () => {
  it("should set products loading when products are loading", () => {
    const initialState = {};

    const setProductsLoading = { type: "SET_PRODUCTS_LOADING", payload: true };

    const state = productReducer(initialState, setProductsLoading);
    
    const expectedResult = { isProductsLoading: true };

    expect(state).toEqual(expectedResult);
  });

  it("should set categories loading when categories are loading", () => {
    const initialState = {};

    const setCategoriesLoading = { type: "SET_CATEGORIES_LOADING", payload: true };

    const state = productReducer(initialState, setCategoriesLoading);
    
    const expectedResult = { isCategoriesLoading: true };

    expect(state).toEqual(expectedResult);
  });

  it("should set products when value is given", () => {
    const initialState = {};

    const setProducts = { 
        type: "SET_PRODUCTS", 
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
        }]
    };

    const state = productReducer(initialState, setProducts);
    
    const expectedResult = {
        products: [{
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

    expect(state).toEqual(expectedResult);
  });

  it("should set categories when value is given", () => {
    const initialState = {};

    const setCategories = { 
        type: "SET_CATEGORIES", 
        payload: [{
            _id: 3,
            categoryName: "T-shirt"
        }]
    };

    const state = productReducer(initialState, setCategories);
    
    const expectedResult = {
        categories: [{
        _id: 3,
        categoryName: "T-shirt"
    }]};

    expect(state).toEqual(expectedResult);
  });

  it("should set search term when value is given", () => {
    const initialState = {};

    const setSearchTerm = { type: "SET_SEARCH_TERM", payload: "suitcase" };

    const state = productReducer(initialState, setSearchTerm);
    
    const expectedResult = {
        filters: {
        searchTerm: "suitcase"
    }};

    expect(state).toEqual(expectedResult);
  });
  
  it("should set sort-by when value is given", () => {
    const initialState = {};

    const setSortBy = { type: "SORT_PRODUCTS", payload: "LOW_TO_HIGH" };

    const state = productReducer(initialState, setSortBy);
    
    const expectedResult = {
        filters: {
        sortBy: "LOW_TO_HIGH"
    }};

    expect(state).toEqual(expectedResult);
  });
  
  it("should set out of stock when value is given", () => {
    const initialState = {};

    const setSortBy = { type: "FILTER_BY_OUT_OF_STOCK", payload: true };

    const state = productReducer(initialState, setSortBy);
    
    const expectedResult = {
        filters: {
        includeOutOfStock: true
    }};

    expect(state).toEqual(expectedResult);
  });
  
  it("should set price range when value is given", () => {
    const initialState = {};

    const setPriceRange = { type: "FILTER_BY_PRICE_RANGE", payload: 15000 };

    const state = productReducer(initialState, setPriceRange);
    
    const expectedResult = {
        filters: {
        priceRange: 15000
    }};

    expect(state).toEqual(expectedResult);
  });
  
  it("should set rating when value is given", () => {
    const initialState = {};

    const setRating = { type: "FILTER_BY_RATING", payload: 4 };

    const state = productReducer(initialState, setRating);
    
    const expectedResult = {
        filters: {
        rating: 4
    }};

    expect(state).toEqual(expectedResult);
  });
  
  it("should filter by category when value is given", () => {
    const initialState = {
        filters: {
            category: ["Suitcase"]
        }
    };

    const setCategory = { type: "FILTER_BY_CATEGORY", payload: "Camera" };

    const state = productReducer(initialState, setCategory);
    
    const expectedResult = {
        filters: {
            category: ["Suitcase", "Camera"]
        }
    };

    expect(state).toEqual(expectedResult);
  });
  
  it("should clear all filters when value is given", () => {
    const initialState = {
        filters: {
            category: ["Suitcase", "Camera"],
            sortBy: "LOW_TO_HIGH",
            rating: 4,
            priceRange: 15000,
            includeOutOfStock: true
        }
    };

    const resetFilters = { type: "CLEAR_ALL_FILTERS" };

    const state = productReducer(initialState, resetFilters);
    
    const expectedResult = {
        filters: {
            sortBy: "FEATURED",
            category: [],
            rating: null,
            priceRange: 25000,
            includeOutOfStock: false
        }
    };

    expect(state).toEqual(expectedResult);
  });
});
