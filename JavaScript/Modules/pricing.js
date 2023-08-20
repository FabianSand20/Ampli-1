// pricing.js

const itemPrices = {
  aglaonema: 12.99,
  aloe: 5.25,
  fern: 10.25,
  cactus: 8.25,
  monstera: 18.00,
  peaceLily: 8.75,
  sansevieria: 5.75,
  'clay-simple-unpainted': 3.00,
  'clay-simple-blue': 4.00,
  'clay-simple-pink': 4.00,
  'clay-simple-green': 4.00,
  'clay-simple-purple': 4.00,
  'clay-decorated-unpainted': 5.00,
  'clay-decorated-blue': 6.00,
  'clay-decorated-pink': 6.00,
  'clay-decorated-green': 6.00,
  'clay-decorated-purple': 6.00,
  'ceramic-simple-unpainted': 5.00,
  'ceramic-simple-blue': 6.00,
  'ceramic-simple-pink': 6.00,
  'ceramic-simple-green': 6.00,
  'ceramic-simple-purple': 6.00,
  'ceramic-decorated-unpainted': 7.00,
  'ceramic-decorated-blue': 8.00,
  'ceramic-decorated-pink': 8.00,
  'ceramic-decorated-green': 8.00,
  'ceramic-decorated-purple': 8.00,
  composted: 3.25,
  fertilized: 5.00,
  drainage: 5.50,
  'moss-pole': 2.25,
  pebbles: 2.00,
  'mini-plants': 3.75,
};

export function calculateTotalPrice(items) {
  let totalPrice = 0;
  items.forEach(item => {
    if (itemPrices[item]) {
      totalPrice += itemPrices[item];
    }
  });
  return totalPrice.toFixed(2);
}

export function itemPrice(item){
  if (itemPrices[item]) {
  return itemPrices[item]
} else { return '0.00'}
}