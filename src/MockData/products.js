export const products = [
  { plu: "001001", price: parseInt((Math.random() * 1000) + 1), description: "Apple", onStop: false, department: "Fruit", img:'/images/buttons/apples-fuji.gif' },
  { plu: "001002", price: parseInt((Math.random() * 1000) + 1), description: "Orange", onStop: false, department: "Fruit", img:'/images/buttons/orange-naval.gif' },
  { plu: "001003", price: parseInt((Math.random() * 1000) + 1), description: "Banana", onStop: true, department: "Fruit", img:'/images/buttons/bananas-large.gif' },
  { plu: "001004", price: parseInt((Math.random() * 1000) + 1), description: "Pear", onStop: false, department: "Fruit", img:'/images/buttons/pear-packham.gif' },
  { plu: "001005", price: parseInt((Math.random() * 1000) + 1), description: "Pineapple", onStop: true, department: "Fruit", img:'' },
  { plu: "002001", price: parseInt((Math.random() * 1000) + 1), description: "Tomato", onStop: false, department: "Veg", img:'/images/buttons/tomatoes-truss.gif' },
  { plu: "002002", price: parseInt((Math.random() * 1000) + 1), description: "Lettuce", onStop: true, department: "Veg", img:'/images/buttons/lettuce-iceberg.gif' },
  { plu: "002003", price: parseInt((Math.random() * 1000) + 1), description: "Capsicum", onStop: false, department: "Veg", img:'/images/buttons/capsicum-green.gif' },
  { plu: "002004", price: parseInt((Math.random() * 1000) + 1), description: "Mushroom", onStop: false, department: "Veg", img:'/images/buttons/mushroom-button.gif' },
  { plu: "002005", price: parseInt((Math.random() * 1000) + 1), description: "Onion", onStop: false, department: "Veg", img:'' },
]

export const departments = [
  {id: "001", description: "Fruit"},
  {id: "002", description: "Veg"},
  {id: "003", description: "Dairy"},
]