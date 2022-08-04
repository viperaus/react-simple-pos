export const products = [
  { plu: "001001", price: parseInt((Math.random() * 10000) + 1), description: "Apple", onStop: false, department: "Fruit" },
  { plu: "001002", price: parseInt((Math.random() * 10000) + 1), description: "Orange", onStop: false, department: "Fruit" },
  { plu: "001003", price: parseInt((Math.random() * 10000) + 1), description: "Banana", onStop: true, department: "Fruit" },
  { plu: "001004", price: parseInt((Math.random() * 10000) + 1), description: "Pear", onStop: false, department: "Fruit" },
  { plu: "002001", price: parseInt((Math.random() * 10000) + 1), description: "Tomato", onStop: false, department: "Veg" },
  { plu: "002002", price: parseInt((Math.random() * 10000) + 1), description: "Lettuce", onStop: true, department: "Veg" },
  { plu: "002003", price: parseInt((Math.random() * 10000) + 1), description: "Capsicum", onStop: false, department: "Veg" },
  { plu: "002004", price: parseInt((Math.random() * 10000) + 1), description: "Mushroom", onStop: false, department: "Veg" },
  { plu: "002005", price: parseInt((Math.random() * 10000) + 1), description: "Onion", onStop: false, department: "Veg" },
]

export const departments = [
  {id: "001", description: "Fruit"},
  {id: "002", description: "Veg"},
]