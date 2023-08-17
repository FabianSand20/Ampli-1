// observer.js

export class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

export class PlantImageObserver {
  constructor(imageElementId) {
    this.imageElement = document.getElementById(imageElementId);
  }

  update(data) {
    this.imageElement.src = `Assets/images/${data.image}`;
  }
}

// module.exports={Subject, PlantImageObserver};
