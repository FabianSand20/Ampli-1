// customize.js

import { PlantBuilder } from './Modules/plantBuilder.js';
import { capitalize } from './Modules/utils.js';
import { Subject, PlantImageObserver } from './Modules/observer.js'

//************Logic Radio Buttons**************/

//*****Seleccion del MATERIAL*******
// Get references to the radio inputs using their IDs
const clayPotRadio = document.getElementById('clayPot');
const ceramicPotRadio = document.getElementById('ceramicPot');
var plantSelected = JSON.parse(localStorage.getItem("PlantImage"));

clayPotRadio.addEventListener('change', handlePotChange);
ceramicPotRadio.addEventListener('change', handlePotChange);
function handlePotChange(event) {
  const selectedPot = event.target.value;

  const ImagePot = document.getElementById('pot');
  if (selectedPot == "clay") {
    //Guardar en localStorage material ligado a la planta seleccionanda
    console.log('strign, lalala')
    console.log(plantSelected);
    plantSelected.typeMaterial = 'clay';
    plantSelected.material = 'simple-clay-pot.png';
    ImagePot.src = "Assets/images/simple-clay-pot.png";
  } else if (selectedPot === "ceramic") {
    ImagePot.src = "Assets/images/simple-ceramic-pot.png";
    plantSelected.typeMaterial = 'ceramic';
    plantSelected.material = 'simple-ceramic-pot.png'
  }
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
}


//*****DECORACION*******
// !REVISAR BIEN ESTO

const potDecorationsToggle = document.getElementById('potDecorationsToggle');

potDecorationsToggle.addEventListener('change', handlePotDecorationsChange);
function handlePotDecorationsChange(event) {
  const ImagePot = document.getElementById('pot');

  if (event.target.checked) {
    const decoratedPotImage = `Assets/images/${plantSelected.typeMaterial}-decorated-${plantSelected.selectedPotColor}.PNG`
    ImagePot.src = decoratedPotImage;
    plantSelected.decoration = decoratedPotImage;
    plantSelected.decorated = true;
  } else {
    const originalPotImage = `Assets/images/${plantSelected.typeMaterial}-simple-${plantSelected.selectedPotColor}.PNG`
    ImagePot.src = originalPotImage;
    plantSelected.decoration = originalPotImage;
    plantSelected.decorated = false;
  }

  // Update plantSelected in local storage
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
}

function setDecoration(decorated){

  switch (selectedColor) {
    case 'blue':
      
      return ;

      break;
    case 'pink':
      break;

    case 'green': 
      break;
    case 'purple':
      break;
    default:
      // Handle default behavior if needed
      break;
  }
}

//*****Seleccion del COLOR*******
const potColorToggle = document.getElementById('potColorToggle');

potColorToggle.addEventListener('change', handlePotColorToggleChange);
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

  switch (selectedColor) {
    case 'blue':
      let blue_path, blue_pot;
      blue_pot = setPotColor('blue');
      blue_path = `Assets/images/${blue_pot}.PNG`;
      ImagePot.src = blue_path;
      plantSelected.potColor = blue_pot;
      plantSelected.selectedPotColor = 'blue';

      localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
      break;
    case 'pink':
      let pink_path, pink_pot;
      pink_pot = setPotColor('pink');
      pink_path = `Assets/images/${pink_pot}.PNG`;
      ImagePot.src = pink_path;
      plantSelected.potColor = pink_pot;
      plantSelected.selectedPotColor = 'pink';

      localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
      break;

    case 'green': 
      let green_path, green_pot;
      green_pot = setPotColor('green');
      green_path = `Assets/images/${green_pot}.PNG`;
      ImagePot.src = green_path;
      plantSelected.potColor = green_pot;
      plantSelected.selectedPotColor = 'green';

      localStorage.setItem('PlantImage', JSON.stringify(plantSelected));

      break;
    case 'purple':
      ImagePot.src = "Assets/images/-pot.png";
      let purplepath, purple_pot;
      purple_pot = setPotColor('purple');
      purplepath = `Assets/images/${purple_pot}.PNG`;
      ImagePot.src = purplepath;
      plantSelected.potColor = purple_pot;
      plantSelected.selectedPotColor = 'purple';
      localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
      break;
    default:
      // Handle default behavior if needed
      break;
  }

}

 function setPotColor(color){
  if (plantSelected.typeMaterial == 'clay' && plantSelected.decorated) {
   return `clay-decorated-${color}`;
  } 
  
  if (plantSelected.typeMaterial == 'clay' && plantSelected.decorated == false) {
    return `clay-simple-${color}`;
  } 
  if (plantSelected.typeMaterial == 'ceramic' && plantSelected.decorated) {
    return `ceramic-decorated-${color}`;
  } 
  if (plantSelected.typeMaterial == 'ceramic' && plantSelected.decorated == false) {
    return `ceramic-simple-${color}`;
  } 
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

  console.log(ImagePlant)
  switch (selectedPlant) {
    case 'Aglaonema Silver Bay':
      ImagePlant.src = 'Assets/images/plant-aglaonema.png';
      plantSelected.plant = 'aglaonema';
      break;
    case 'Aloe Vera':
      ImagePlant.src = 'Assets/images/plant-aloe.png';
      plantSelected.plant = 'aloe';
      break;
    case 'Boston Fern':
      ImagePlant.src = 'Assets/images/plant-fern.png';
      plantSelected.plant = 'fern';
      break;
    case 'Cactus':
      ImagePlant.src = 'Assets/images/plant-cactus.png';
      plantSelected.plant = 'cactus';
      break;
    case 'Monstera Deliciosa':
      ImagePlant.src = 'Assets/images/plant-monstera.png';
      plantSelected.plant = 'monstera';
      break;
    case 'Peace Lily':
      ImagePlant.src = 'Assets/images/plant-peace-lily.png';
      plantSelected.plant = 'peace-lily';

      break;
    case 'Sansevieria':
      ImagePlant.src = 'Assets/images/plant-sansevieria.png';
      plantSelected.plant = 'sansevieria';
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

  const ImageExtras = document.getElementById('customizeExtrasContainer');
  ImageExtras.innerHTML = ''; // Limpiar el contenido actual

  if (mossPoleCheckbox.checked) {
    const mossPoleImg = document.createElement('img');
    mossPoleImg.src = 'Assets/images/moss-pole.png';
    plantSelected.extras = 'moss-pole.png';
    mossPoleImg.alt = 'Moss Pole';
    ImageExtras.appendChild(mossPoleImg);
  }

  if (pebblesCheckbox.checked) {
    const pebblesImg = document.createElement('img');
    pebblesImg.src = 'Assets/images/pebbles.png';
    plantSelected.extras = 'pebbles.png';
    pebblesImg.alt = 'Pebbles';
    ImageExtras.appendChild(pebblesImg);
  }

  if (smallerPlantsCheckbox.checked) {
    const smallerPlantsImg = document.createElement('img');
    smallerPlantsImg.src = 'Assets/images/mini-plants.png';
    plantSelected.extras = 'mini-plants.png';
    smallerPlantsImg.alt = 'Smaller Plants';
    ImageExtras.appendChild(smallerPlantsImg);
  }
  localStorage.setItem('PlantImage', JSON.stringify(plantSelected));
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
    let customizeExtrasContainer = document.getElementById('customizeExtrasContainer');

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
    plantImage.src = `Assets/images/plant-${imagesHOJA.plant}.png`;
    plantImage.id = "choosePlant"
    customizePlantImageContainer.appendChild(plantImage);

    // Create and append soil image
    const soilImage = document.createElement('img');
    soilImage.src = `Assets/images/${imagesHOJA.soil}`;
    soilImage.id = "soil"
    customizeSoilImageContainer.appendChild(soilImage);

    // Create and append extras images
    const extraImage = document.createElement('img');
    extraImage.src = `Assets/images/${imagesHOJA.extras}`;
    console.log(extraImage.src )
    extraImage.id = "extras"
    customizeExtrasContainer.appendChild(extraImage);

    customizationSubject.notify({
      image: imagesHOJA.pot, // Imagen de la maceta
    });
    customizationSubject.notify({
      image: imagesHOJA.plant, // Imagen de la planta
    });
    customizationSubject.notify({
      image: imagesHOJA.soil, // Imagen del suelo
    });
    customizationSubject.notify({
      image: imagesHOJA.extras, // Imagen del suelo
    });
  }
});
