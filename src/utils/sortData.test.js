import { getSortedData } from ".";

describe("testing sorting of products", () => {
  it("should sort products from low to high price", () => {
    const products = [
        {
          _id: 1,
          title: "American Tourister Suitcase",
          price: "9995",
          originalPrice: "15000",
          rating: {
            value: "2",
            count: "9966"
          },
          categoryName: "Suitcase",
          outOfStock: false
        },
        {
          _id: 2,
          title: "Skybags Suitcase",
          price: "11999",
          originalPrice: "18999",
          rating: {
            value: "4.1",
            count: "25111"
          },
          categoryName: "Suitcase",
          badge: "BESTSELLER",
          outOfStock: false
        },
        {
          _id: 3,
          title: "Fuji Digital Camera",
          price: "10000",
          originalPrice: "18000",
          rating: {
            value: "3.5",
            count: "12365"
          },
          categoryName: "Camera",
          outOfStock: false
        }
      ];
    
    const sortBy = "LOW_TO_HIGH";

    const expectedResult = [{
        _id: 1,
        title: "American Tourister Suitcase",
        price: "9995",
        originalPrice: "15000",
        rating: {
          value: "2",
          count: "9966"
        },
        categoryName: "Suitcase",
        outOfStock: false
      },
      {
        _id: 3,
        title: "Fuji Digital Camera",
        price: "10000",
        originalPrice: "18000",
        rating: {
          value: "3.5",
          count: "12365"
        },
        categoryName: "Camera",
        outOfStock: false
      },
      {
        _id: 2,
        title: "Skybags Suitcase",
        price: "11999",
        originalPrice: "18999",
        rating: {
          value: "4.1",
          count: "25111"
        },
        categoryName: "Suitcase",
        badge: "BESTSELLER",
        outOfStock: false
      }];

    const sortedProducts = getSortedData(products, sortBy);

    expect(sortedProducts).toEqual(expectedResult);
  });

  it("should sort products from high to low price", () => {
    const products = [
        {
          _id: 1,
          title: "American Tourister Suitcase",
          price: "9995",
          originalPrice: "15000",
          rating: {
            value: "2",
            count: "9966"
          },
          categoryName: "Suitcase",
          outOfStock: false
        },
        {
          _id: 2,
          title: "Skybags Suitcase",
          price: "11999",
          originalPrice: "18999",
          rating: {
            value: "4.1",
            count: "25111"
          },
          categoryName: "Suitcase",
          badge: "BESTSELLER",
          outOfStock: false
        },
        {
          _id: 3,
          title: "Fuji Digital Camera",
          price: "10000",
          originalPrice: "18000",
          rating: {
            value: "3.5",
            count: "12365"
          },
          categoryName: "Camera",
          outOfStock: false
        }
      ];

    const sortBy = "HIGH_TO_LOW";

    const expectedResult = [
      {
        _id: 2,
        title: "Skybags Suitcase",
        price: "11999",
        originalPrice: "18999",
        rating: {
          value: "4.1",
          count: "25111"
        },
        categoryName: "Suitcase",
        badge: "BESTSELLER",
        outOfStock: false
      },
      {
        _id: 3,
        title: "Fuji Digital Camera",
        price: "10000",
        originalPrice: "18000",
        rating: {
          value: "3.5",
          count: "12365"
        },
        categoryName: "Camera",
        outOfStock: false
      },
      {
        _id: 1,
        title: "American Tourister Suitcase",
        price: "9995",
        originalPrice: "15000",
        rating: {
          value: "2",
          count: "9966"
        },
        categoryName: "Suitcase",
        outOfStock: false
      }];

    const sortedProducts = getSortedData(products, sortBy);
    expect(sortedProducts).toEqual(expectedResult);
  });
});