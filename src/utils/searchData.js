export const getSearchedData = (products, search) => {
    return search === ""
    ? products
    : products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
};
