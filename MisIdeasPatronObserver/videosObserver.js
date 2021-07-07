class Observable {
  constructor() {
    this.observadores = [];
  }

  subscribe(observerClass) {
    this.observadores.push(observerClass);
  }

  unsubscribe(observerClass) {
    this.observadores.filter(
      (observer) => observer instanceof observerClass !== true
    );
  }

  notifyObservable(message) {
    this.observadores.forEach((observer) => {
      observer.notify(message);
    });
  }
}

class reproductionList extends Observable {
  constructor() {
    super();
    this.list = [];
    this.lastVideo = "";
  }
  update(title) {
    this.lastVideo = title;
    this.list.push(title);
    this.notifyObservable(this);
  }
}

class subscriptorOne {
  notify(message) {
    console.log(`The new document added is ${message.lastVideo}`);
    console.log(`ReproductionList ${message.list}`);
  }
}

class subscriptorTwo {
  notify(message) {
    console.log(`The last video added is ${message.lastVideo}`);
    console.log(`ReproductionList ${message.list}`);
  }
}

let videoAdded = new reproductionList();

videoAdded.subscribe(new subscriptorOne());
videoAdded.subscribe(new subscriptorTwo());

videoAdded.update("Programing Js");
videoAdded.update("The Big Bang Theory");
