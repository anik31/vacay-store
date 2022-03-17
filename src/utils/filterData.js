export function getFilteredData(data, category, rating, priceRange, includeOutOfStock){
    return data
    .filter((item) => includeOutOfStock ? true : item.outOfStock===false)
    .filter((item1) => Number(item1.rating.value) >= rating)
    .filter((item2) => Number(item2.price) <= priceRange)
    .filter((item3) => category.length===0?true:category.includes(item3.categoryName));
}