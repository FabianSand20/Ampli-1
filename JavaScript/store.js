// Store.js

import { checkInventory, getPlantInfo } from './Modules/api.js';
import { calculateTotalPrice } from './Modules/pricing.js';

// Datos de producto (esto debe ser adaptado según tu proyecto)
const productData = {
  name: [],
  soil: [],
  pot: [],
  color: [],
  extras: [],
  // Agrega más propiedades según tus necesidades
};

// Función para mostrar la información del producto
async function showProductInformation() {
  // Obtenemos los elementos donde mostraremos la información
  const customizePotImageContainer = document.getElementById('customizePotImageContainer');
  const customizeExtrasContainer = document.getElementById('customizeExtrasContainer');
  const customizeSoilImageContainer = document.getElementById('customizeSoilImageContainer');
  const customizePlantImageContainer = document.getElementById('customizePlantImageContainer');
  const customizeInfo = document.getElementById('customizeInfo');
  const inventoryAlerts = document.querySelector('.inventory-alerts');
  const orderButton = document.getElementById('orderButton');

  // Mostrar imágenes del producto (debes reemplazar las rutas)
  customizePotImageContainer.innerHTML = `<img src="path-to-pot-image" alt="Pot">`;
  customizeExtrasContainer.innerHTML = `<img src="path-to-extra-image" alt="Extra">`; // Agregar más imágenes de extras si es necesario
  customizeSoilImageContainer.innerHTML = `<img src="path-to-soil-image" alt="Soil">`;
  customizePlantImageContainer.innerHTML = `<img src="path-to-plant-image" alt="Plant">`;

  // Mostrar información del producto
  customizeInfo.innerHTML = `
    <h2>Product Information</h2>
    <p>Name: ${productData.name}</p>
    <p>Soil: ${productData.soil}</p>
    <p>Pot: ${productData.pot}</p>
    <p>Color: ${productData.color}</p>
    <p>Extras: ${productData.extras.join(', ')}</p>
    <!-- Agrega detalles del desglose de precios -->
  `;

  // Lógica para verificar inventario y mostrar alertas
  const inventoryStatus = await checkInventory();
  if (inventoryStatus === 'out-of-stock') {
    inventoryAlerts.innerHTML = '<div class="inventory-alert">One of the items in your order is out of stock. Please check the inventory alerts.</div>';
    orderButton.disabled = true;
  } else if (inventoryStatus === 'low-stock') {
    inventoryAlerts.innerHTML = '<div class="inventory-alert">One of the items in your order has limited stock. Order soon!</div>';
    orderButton.disabled = false;
  } else {
    inventoryAlerts.innerHTML = '<div class="inventory-alert">In Stock</div>';
    orderButton.disabled = false;
  }

  // Lógica para obtener la información de la planta (API request)
  const plantInfo = await getPlantInfo('aglaonema');
  // Mostrar información de la planta en el accordion correspondiente

  // Agregar secciones de cuidado
  const careSection = document.querySelector('.accordion h3');
  careSection.addEventListener('click', () => {
    const careAccordion = document.querySelector('.accordion.care');
    if (careAccordion.style.maxHeight) {
      careAccordion.style.maxHeight = null;
    } else {
      careAccordion.style.maxHeight = careAccordion.scrollHeight + 'px';
    }
  });
}

// Escuchar el evento de carga del DOM y mostrar la información del producto
document.addEventListener('DOMContentLoaded', showProductInformation);
