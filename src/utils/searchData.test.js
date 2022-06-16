import { getSearchedData } from ".";

test("should return searched products", () => {
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
        },
        {
          _id: 4,
          title: "Nikon DSLR Camera",
          price: "25000",
          originalPrice: "40000",
          rating: {
            value: "4.5",
            count: "255111"
          },
          categoryName: "Camera",
          badge: "NEW",
          dealOfTheDay: true,
          outOfStock: false
        }
      ];
    const searchTerm = "suitcase";
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
    const searchedProducts = getSearchedData(products, searchTerm);
    expect(searchedProducts).toEqual(expectedResult);
});