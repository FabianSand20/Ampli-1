import { itemPrice } from './Modules/pricing.js';
import { calculateTotalPrice } from './Modules/pricing.js';

import {checkInventory} from './Modules/api.js'

var plantSelected = JSON.parse(localStorage.getItem("PlantImage"));
var selectedPot = '';
const checkoutPreview = document.getElementById('checkoutPreview');
const checkoutTitle = document.getElementById('checkoutTitle');
const checkoutPotImageContainer = document.getElementById('checkoutPotImageContainer');
const checkoutExtrasContainer = document.getElementById('checkoutExtrasContainer');
const checkoutSoilImageContainer = document.getElementById('checkoutSoilImageContainer');
const checkoutPlantImageContainer = document.getElementById('checkoutPlantImageContainer');
const checkoutInfo = document.getElementById('checkoutInfo');
const inventary = document.getElementById('inventario');


displayImage();

function displayImage() {
  console.log(plantSelected)

  // Clear previous recommendation
  checkoutPotImageContainer.innerHTML = '';
  checkoutPlantImageContainer.innerHTML = '';
  checkoutSoilImageContainer.innerHTML = '';
  checkoutExtrasContainer.innerHTML = '';
  ch_plant_detail.innerHTML = '';

  // Create and append plant image
  const plantImage = document.createElement('img');
  plantImage.src = `Assets/images/plant-${plantSelected.plant}.png`;
  console.log(plantImage.src)
  checkoutPlantImageContainer.appendChild(plantImage);

  // Create and append soil image
  const soilImage = document.createElement('img');
  soilImage.src = `assets/images/${plantSelected.soil}`;
  checkoutSoilImageContainer.appendChild(soilImage);

  // Create and append pot image
  const potImage = document.createElement('img');
  if(plantSelected.decorated ) {
    selectedPot =  `${plantSelected.typeMaterial}-decorated-${plantSelected.selectedPotColor}`;
    potImage.src = `Assets/images/${plantSelected.typeMaterial}-decorated-${plantSelected.selectedPotColor}.PNG`
  }else {
    selectedPot =  `${plantSelected.typeMaterial}-simple-${plantSelected.selectedPotColor}`;
    potImage.src = `Assets/images/${plantSelected.typeMaterial}-simple-${plantSelected.selectedPotColor}.PNG`
  }
  checkoutPotImageContainer.appendChild(potImage);

  // // Create and append extras images
  //   const extraImage = document.createElement('img');
  //   extraImage.src = `assets/images/${extra}.png`;
  //   checkoutExtrasContainer.appendChild(extraImage);



  // Create recommendation info


  createCheckoutFields(plantSelected.plant);
  createCheckoutFields(selectedPot);
  createCheckoutFields(plantSelected.soil_type);
  const fields = [plantSelected.plant, selectedPot, plantSelected.soil_type ]
  setTotalCheckout(fields)
  fetchInventory();
}

function setTotalCheckout(fields){
  const field_name = document.createElement('h2');
  const field_price = document.createElement('span');
  field_name.textContent = "Total";
  const price = `$ ${calculateTotalPrice(fields)}`;
  field_price.textContent = price;
  checkoutInfo.appendChild(field_name);
  field_name.appendChild(field_price);
}
function createCheckoutFields(elem, html_elem){
  const field_name = document.createElement('h2');
  const field_price = document.createElement('span');
  field_name.textContent = elem;
  const price = `$ ${itemPrice(elem)}`;
  field_price.textContent = price;
  checkoutInfo.appendChild(field_name);
  field_name.appendChild(field_price);

}


function fetchInventory() {
  const field_name = document.createElement('h2');
  const field_price = document.createElement('span');
  field_name.textContent = "Avaliable";
  var price ="0.00"
  checkInventory("plant",plantSelected.plant).then((a) => {
    field_price.textContent =  a['stock'];
    inventary.appendChild(field_name);
    field_name.appendChild(field_price);
  });
}

