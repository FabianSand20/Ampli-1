// api.js

export async function checkInventory(productType, itemId) {
  const response = await fetch(`https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/inventory/${productType}/${itemId}`);
  const data = await response.json();
  return data;
}

export async function getPlantInfo(plantId) {
  const response = await fetch(`https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/info/${plantId}`);
  const data = await response.json();
  return data;
}

export async function getCareTips(plantId) {
  const response = await fetch(`https://qfble0gquj.execute-api.us-east-2.amazonaws.com/plant-store/care/${plantId}`);
  const data = await response.json();
  return data;
}
