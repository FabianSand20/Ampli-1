import { itemPrice } from './Modules/pricing.js';
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
const ch_plant_detail = document.getElementById('ch_plant_detail');
const ch_pot_detail = document.getElementById('ch_pot_detail');
const ch_soil_detail = document.getElementById('ch_soil_detail');
const ch_extra_detail = document.getElementById('ch_extra_detail');
const ch_total_detail = document.getElementById('ch_total_detail');

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
  const plant = plantSelected.plant;
  const description = document.createElement('h2');
  const plant_price = document.createElement('h3');
  description.textContent = plant;
  const plantPrice = `$ ${itemPrice(plant)}`;
  plant_price.textContent = plantPrice;
  ch_plant_detail.appendChild(description);
  ch_plant_detail.appendChild(plant_price);

  const pot_name_element = document.createElement('h2');
  const pot_price_element= document.createElement('h3');
  pot_name_element.textContent = selectedPot;
  const potPrice = `$ ${itemPrice(selectedPot)}`;
  pot_price_element.textContent = potPrice;
  ch_pot_detail.appendChild(pot_name_element);
  ch_pot_detail.appendChild(pot_price_element);
}


