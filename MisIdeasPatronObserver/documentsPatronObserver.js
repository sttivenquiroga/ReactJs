class Observable {
  constructor() {
    this.observadores = [];
  }

  subscribe(observerClass) {
    this.observadores.push(observerClass);
  }

  unsubscribe(observerClass) {
    this.observadores.filter((observer) => observer instanceof observerClass !== true);
  }

  notifyObservable(message) {
    this.observadores.forEach((observer) => {
      observer.notify(message);
    });
  }
}

class Documents extends Observable {
  constructor() {
    super();
    this.documents = [];
    this.lastDocument = "";
  }
  update(title) {
    this.lastDocument = title;
    this.notifyObservable(this);
  }
}

class userNumberOne {
  notify(message) {
    console.log(`The new document added is ${message.lastDocument}`);
  }
}

class userNumberTwo {
  notify(message) {
    console.log(`The last document added is ${message.lastDocument}`);
  }
}

let documentAdded = new Documents();

documentAdded.subscribe(new userNumberOne());
documentAdded.subscribe(new userNumberTwo());

documentAdded.update("La bella y la bestia");
documentAdded.update("Cien años de soledad");
