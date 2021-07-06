/**
 * Clase que contiene las funciones y metodos del objeto Observable
 */

class Observable {
  constructor() {
    //   Se inicializa en el constructor un array llamado observers que almacenará los observadores de el observable
    this.observers = [];
  }

  //   Se crea una funcipon para la subscripción  a la clase observable que recibe un parametro que será el observador
  subscribe(notifyingClass) {
    //   Se inserta al array observers el observador que se recibe mediante el parámetro en esta función.
    this.observers.push(notifyingClass);
  }

  /**
   *Función para desuscribirse al observable, en el cual se recibe un parámetro que será el observador a *quitar del array de observers.
   */
  unsubscribe(notifyingClass) {
    /**
     *Se le asigna al array de observers el resultado de ese array luego de haberlo filtrado y haber comparado que *el tipo de observer en el array es diferente al observer recibido en el parametro de esta función para *desuscribirse
     */
    this.observers = this.observers.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }

  /**
   *Función para notificar a cada uno de los observadores de ese observable.
   */
  notifyObservable(notification) {
    /**
     *Este for,  recorre el array de los observers, en el que cada observer se ejecuta un metodo de notificación
     *que envía como parámetro, el párametro recibido en la función notifyObservable
     */
    this.observers.forEach((observer) => {
      observer.notify(notification);
    });
  }
}

/**
 * Clase hija de la clase observable, que además extiende las funciones que este tiene.
 */

class NumberExample extends Observable {
  constructor() {
    super(); // Esta palabra reservada, llama las funciones de el objeto padre, dentro del contructor del objeto hijo.
    this.value = 0;
  }

  /**
   * Esta función llama a value y lo va incrementando en uno cada vez que se llama y además le envia todo el contexto de este a la función de su padre this.notifyObservable.
   */
  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

/**
 * Clase que tiene una funcion de notificación en Español.
 */
class NumberExampleSpanish {
  notify(notification) {
    console.log(`El nuevo número es: ${notification.value}`); //Esta función imprime en consola el valor de ese párametro recibido.
  }
}

/**
 * Clase que tiene una funcion de notificación en Inglés.
 */
class NumberExampleEnglish {
  notify(notification) {
    console.log(`New number is : ${notification.value}`); //Esta función imprime en consola el valor de ese párametro recibido.
  }
}

// variable en la que se instancia la clase NumberExample
let numberExample = new NumberExample();

/**
 * En esta sección, la variable se suscribe a los observadores NumberExampleSpanish y NumberExampleEnglish y así
 * poder ver los cambios del observable y sus hijos.
 */
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

/**
 * Se invoca 2 veces la función increment de variable numberExample en la que se instanció la clase NumberExample
 */
numberExample.increment();
numberExample.increment();
