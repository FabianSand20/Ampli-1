// customize.js

import { PlantBuilder } from './Modules/plantBuilder.js';
import { capitalize } from './Modules/utils.js';
import { Subject, PlantImageObserver } from './Modules/observer.js'

//************Logic Radio Buttons**************/

//*****Seleccion del MATERIAL*******
// Get references to the radio inputs using their IDs
const clayPotRadio = document.getElementById('clayPot');
const ceramicPotRadio = document.getElementById('ceramicPot');

clayPotRadio.addEventListener('change', handlePotChange);
ceramicPotRadio.addEventListener('change', handlePotChange);
function handlePotChange(event) {
  const selectedPot = event.target.value;

  const ImagePot = document.getElementById('pot');
  let plantSelected = JSON.parse(localStorage.getItem("PlantImage"));
  if (selectedPot == "clay") {
    //Guardar en localStorage material ligado a la planta seleccionanda
    console.log('strign, lalala')
    console.log(plantSelected)
    plantSelected.material = 'simple-clay-pot.png'
    ImagePot.src = "Assets/images/simple-clay-pot.png"
  } else if (selectedPot === "ceramic") {
    ImagePot.src = "Assets/images/simple-ceramic-pot.png";
    plantSelected.material = 'simple-ceramic-pot.png'
  }
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
}


//*****DECORACION*******
// !REVISAR BIEN ESTO

const potDecorationsToggle = document.getElementById('potDecorationsToggle');
let plantSelected = JSON.parse(localStorage.getItem("PlantImage"));

potDecorationsToggle.addEventListener('change', handlePotDecorationsChange);
function handlePotDecorationsChange(event) {
  const ImagePot = document.getElementById('pot');

  if (event.target.checked) {
    const decoratedPotImage = ImagePot.src.includes("simple-ceramic-pot")
      ? "Assets/images/simple-ceramic-pot-decorated.png"
      : "Assets/images/simple-clay-pot-decorated.png";

    ImagePot.src = decoratedPotImage;
    plantSelected.decoration = decoratedPotImage;
  } else {
    const originalPotImage = ImagePot.src.includes("simple-ceramic-pot-decorated")
      ? "Assets/images/simple-ceramic-pot.png"
      : "Assets/images/simple-clay-pot.png";

    ImagePot.src = originalPotImage;
    plantSelected.decoration = originalPotImage;
  }

  // Update plantSelected in local storage
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
}

//*****Seleccion del COLOR*******
// !REVISAR
const potColorToggle = document.getElementById('potColorToggle');

potColorToggle.addEventListener('change', handlePotColorToggleChange);
debugger;
console.log('hola')
function handlePotColorToggleChange(event) {
  const potColorOptions = document.getElementById('potColorOptions');
  const selectedColor = document.querySelector('input[name="potColor"]:checked');

  if (event.target.checked) {
    potColorOptions.style.display = 'block';
  } else {
    potColorOptions.style.display = 'none';
    if (selectedColor) {
      selectedColor.checked = false;
    }
  }
}

const potColorRadios = document.querySelectorAll('input[name="potColor"]');
potColorRadios.forEach(radio => {
  radio.addEventListener('change', handlePotColorChange);
});

function handlePotColorChange(event) {
  const selectedColor = event.target.value;
  const ImagePot = document.getElementById('pot');

  let plantSelected = JSON.parse(localStorage.getItem("PlantImage"));

  switch (selectedColor) {
    case 'blue':
      plantSelected.potColor = 'simple-clay-pot.png'
      ImagePot.src = "Assets/images/painted-clay-pot-decorated.png";
      break;
    case 'pink':
      plantSelected.potColor = 'painted-ceramic-pot-decorated.png'
      ImagePot.src = "Assets/images/painted-ceramic-pot-decorated.png";
      break;
    case 'green':
      ImagePot.src = "Assets/images/green-pot.png";
      break;
    case 'purple':
      ImagePot.src = "Assets/images/purple-pot.png";
      break;
    default:
      // Handle default behavior if needed
      break;
  }
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));

}

//*****Decoracion del SOIL*******

const basicSoilRadio = document.getElementById('basicSoil');
const premiumSoilRadio = document.getElementById('premiumSoil');
const drainageSoilRadio = document.getElementById('drainageSoil');

basicSoilRadio.addEventListener('change', handleSoilChange);
premiumSoilRadio.addEventListener('change', handleSoilChange);
drainageSoilRadio.addEventListener('change', handleSoilChange);

function handleSoilChange(event) {
  const selectedSoil = event.target.value;
  const ImageSoil = document.getElementById('soil');

  let plantSelected = JSON.parse(localStorage.getItem("PlantImage"));

  if (selectedSoil === 'basicSoil') {
    plantSelected.Abono = 'simple-clay-pot.png'
    ImageSoil.src = 'Assets/images/soil-composted.png';
  } else if (selectedSoil === 'premiumSoil') {
    plantSelected.Abono = 'soil-fertilized.png'
    ImageSoil.src = 'Assets/images/soil-fertilized.png';
  } else if (selectedSoil === 'drainageSoil') {
    plantSelected.Abono = 'soil-drainage.png'
    ImageSoil.src = 'Assets/images/soil-drainage.png';
  }
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));

}

//*****Eleccion del PLANTA*******
const choosePlantSelect = document.getElementById('formPlant');
choosePlantSelect.addEventListener('change', handlePlantChange);

function handlePlantChange(event) {
  const selectedPlant = event.target.value;
  const ImagePlant = document.getElementById('choosePlant');
  let plantSelected = JSON.parse(localStorage.getItem("PlantImage"));

  debugger;
  console.log(ImagePlant)
  switch (selectedPlant) {
    case 'Aglaonema Silver Bay':
      ImagePlant.src = 'Assets/images/plant-aglaonema.png';
      plantSelected.plant = 'plant-aglaonema.png';
      break;
    case 'Aloe Vera':
      ImagePlant.src = 'Assets/images/plant-aloe.png';
      plantSelected.plant = 'plant-aloe.png';
      break;
    case 'Boston Fern':
      ImagePlant.src = 'Assets/images/plant-fern.png';
      plantSelected.plant = 'plant-fern.png';
      break;
    case 'Cactus':
      ImagePlant.src = 'Assets/images/plant-cactus.png';
      plantSelected.plant = 'plant-cactus.png';
      break;
    case 'Monstera Deliciosa':
      ImagePlant.src = 'Assets/images/plant-monstera.png';
      plantSelected.plant = 'plant-monstera.png';
      break;
    case 'Peace Lily':
      ImagePlant.src = 'Assets/images/plant-peace-lily.png';
      plantSelected.plant = 'plant-peace-lily.png';

      break;
    case 'Sansevieria':
      ImagePlant.src = 'Assets/images/plant-sansevieria.png';
      plantSelected.plant = 'plant-sansevieria.png';
      break;
    default:
      ImagePlant.src = '';
      break;
  }
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));

}


//*****Decoracion del EXTRAS*******
const mossPoleCheckbox = document.getElementById('mossPole');
const pebblesCheckbox = document.getElementById('pebbles');
const smallerPlantsCheckbox = document.getElementById('smallerPlants');

mossPoleCheckbox.addEventListener('change', handleExtrasChange);
pebblesCheckbox.addEventListener('change', handleExtrasChange);
smallerPlantsCheckbox.addEventListener('change', handleExtrasChange);

function handleExtrasChange() {
  const ImageExtras = document.getElementById('extrasContainer');
  ImageExtras.innerHTML = ''; // Limpiar el contenido actual

  if (mossPoleCheckbox.checked) {
    const mossPoleImg = document.createElement('img');
    mossPoleImg.src = 'Assets/images/moss-pole.png';
    mossPoleImg.alt = 'Moss Pole';
    ImageExtras.appendChild(mossPoleImg);
  }

  if (pebblesCheckbox.checked) {
    const pebblesImg = document.createElement('img');
    pebblesImg.src = 'Assets/images/pebbles.png';
    pebblesImg.alt = 'Pebbles';
    ImageExtras.appendChild(pebblesImg);
  }

  if (smallerPlantsCheckbox.checked) {
    const smallerPlantsImg = document.createElement('img');
    smallerPlantsImg.src = 'Assets/images/mini-plants.png';
    smallerPlantsImg.alt = 'Smaller Plants';
    ImageExtras.appendChild(smallerPlantsImg);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const customizeForm = document.getElementById('customizeForm');
  const customizePreview = document.getElementById('customizePreview');
  const customizePotImageContainer = document.getElementById('customizePotImageContainer');
  const customizePlantImageContainer = document.getElementById('customizePlantImageContainer');
  const customizeSoilImageContainer = document.getElementById('customizeSoilImageContainer');
  const customizeExtrasContainer = document.getElementById('customizeExtrasContainer');
  const customizeInfo = document.getElementById('customizeInfo');

  const customizationSubject = new Subject();

  // Crear observadores y suscribirlos al Subject
  const potImageObserver = new PlantImageObserver('pot');
  const plantImageObserver = new PlantImageObserver('choosePlant');
  const soilImageObserver = new PlantImageObserver('soil');

  customizationSubject.subscribe(potImageObserver);
  customizationSubject.subscribe(plantImageObserver);
  customizationSubject.subscribe(soilImageObserver);

  showCustomization();
  customizeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const choosePot = document.querySelector('input[name="choosePot"]:checked');
    const potDecorationsToggle = document.getElementById('potDecorationsToggle');
    const potColorToggle = document.getElementById('potColorToggle');
    const potColorOptions = document.getElementById('potColorOptions');
    const choosePlant = document.getElementById('choosePlant').value;
    const chooseSoil = document.querySelector('input[name="chooseSoil"]:checked');
    const chooseExtras = Array.from(document.querySelectorAll('input[name="chooseExtras"]:checked'));

    if (choosePot && choosePlant && chooseSoil) {
      const builder = new PlantBuilder();

      builder.withName(capitalize(choosePlant));

      if (chooseSoil.value === 'Basic composted soil') {
        builder.withSoil('Drainage Soil');
      } else if (chooseSoil.value === 'Premium fertilized soil') {
        builder.withSoil('Fertilized Soil');
      } else if (chooseSoil.value === 'Easy drainage soil') {
        builder.withSoil('Composted Soil');
      }

      if (choosePot.value === 'clay') {
        builder.withPotMaterial('Clay pot');
      } else if (choosePot.value === 'ceramic') {
        builder.withPotMaterial('Ceramic pot');
      }

      if (potDecorationsToggle.checked) {
        builder.withPotStyle('Decorated pot');
      } else {
        builder.withPotStyle('Simple pot');
      }

      if (potColorToggle.checked) {
        const potColor = document.querySelector('input[name="potColor"]:checked').value;
        builder.withColor(capitalize(potColor));
      }

      const chooseExtrasList = chooseExtras.map(extra => extra.value);
      builder.withExtras(chooseExtrasList);

      const customization = builder.build();
      const pepe = JSON.stringify(customization)
      console.log(customization)
      localStorage.setItem('customization', pepe)
      showCustomization(customization);
    } else {
      alert('Por favor, responde todas las preguntas.');
    }
  });


  function showCustomization(recommendation, imagesHOJA) {


    /// Function to save information to the cache
    recommendation = JSON.parse(localStorage.getItem('Plant'));
    imagesHOJA = JSON.parse(localStorage.getItem('PlantImage'));

    // Clear previous recommendation
    customizePotImageContainer.innerHTML = '';
    customizePlantImageContainer.innerHTML = '';
    customizeSoilImageContainer.innerHTML = '';
    customizeExtrasContainer.innerHTML = '';
    customizeInfo.innerHTML = '';


    // Create and append pot image
    const potImage = document.createElement('img');
    potImage.src = `Assets/images/${imagesHOJA.water}`;
    potImage.id = "pot"
    customizePotImageContainer.appendChild(potImage);

    // Create and append plant image
    const plantImage = document.createElement('img');
    plantImage.src = `Assets/images/${imagesHOJA.plant}`;
    plantImage.id = "choosePlant"
    customizePlantImageContainer.appendChild(plantImage);

    // Create and append soil image
    const soilImage = document.createElement('img');
    soilImage.src = `Assets/images/${imagesHOJA.soil}`;
    soilImage.id = "soil"
    customizeSoilImageContainer.appendChild(soilImage);

    // Create and append extras images
    const extraImage = document.createElement('img');
    extraImage.src = `assets/images/${extra}.png`;
    extraImage.id = "extra"
    extrasContainer.appendChild(soilImage);

    customizationSubject.notify({
      image: imagesHOJA.water, // Imagen de la maceta
    });
    customizationSubject.notify({
      image: imagesHOJA.plant, // Imagen de la planta
    });
    customizationSubject.notify({
      image: imagesHOJA.soil, // Imagen del suelo
    });

  }
});
