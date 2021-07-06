class Observable {
  constructor() {
    this.videos = [];
  }

  subscribe(observerClass) {
    this.videos.push(observerClass);
  }

  unsubscribe(observerClass) {
    this.videos.filter(
      (observer) => observer instanceof observerClass !== true
    );
  }

  notifyObservable(message) {
    this.videos.forEach((observer) => {
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
    this.notifyObservable(this);
  }
}

class subscriptorOne {
  notify(message) {
    console.log(`The new document added is ${message.lastVideo}`);
  }
}

class subscriptorTwo {
  notify(message) {
    console.log(`The last document added is ${message.lastVideo}`);
  }
}

let documentAdded = new reproductionList();

documentAdded.subscribe(new subscriptorOne());
documentAdded.subscribe(new subscriptorTwo());

documentAdded.update("New video added, Programing Js");
documentAdded.update("New video added, The Big Bang Theory");
