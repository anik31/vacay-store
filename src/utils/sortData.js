export function getSortedData(data,sortBy){
    if (sortBy === "LOW_TO_HIGH")
        return [...data].sort((a, b) => a.price - b.price);
    else if (sortBy === "HIGH_TO_LOW")
        return [...data].sort((a, b) => b.price - a.price);
    return data;
}