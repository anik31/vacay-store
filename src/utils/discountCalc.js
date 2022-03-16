export function discountCalc(sellingPrice, originalPrice){
    return Math.round((Number(originalPrice)-Number(sellingPrice))/originalPrice*100);
}