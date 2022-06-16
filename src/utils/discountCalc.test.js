import { discountCalc } from ".";

test("should return discount percent", () => {
    const sellingPrice = 10000, originalPrice = 18000;
    const discount = discountCalc(sellingPrice, originalPrice);
    expect(discount).toBe(44);
});