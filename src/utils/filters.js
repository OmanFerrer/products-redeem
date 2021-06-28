export const filters = {
  mostrecent: "Most recent",
  lowestprice: "Lowest price",
  highestprice: "Highest price",
};

export const filtersMethods = {
  mostrecent: null,
  lowestprice: (a, b) => a.cost - b.cost,
  highestprice: (a, b) => b.cost - a.cost
};