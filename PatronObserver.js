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
 * Clase hija de la clase que va a ser observada (clase hija), que además extiende las funciones que este tiene.
 */

class NumberExample extends Observable {
  constructor() {
    super(); // Esta palabra reservada, llama las funciones de el objeto padre, dentro del contructor del objeto hijo.
    this.value = 0;
  }

  /**
   * Esta función llama a value y lo va incrementando en uno cada vez que se llama y además le envia todo el contexto de este a la función de su padre this.notifyObservable. Además de cambiar el valor de la variable value, hace que los observadores reaccionen a este cambio
   */
  increment() {
    this.value++;
    this.notifyObservable(this);
  }
}

/**
 * Clase Observadora que tiene una funcion de notificación en Español incluyendo el valor del observable actualizado.
 */
class NumberExampleSpanish {
  notify(notification) {
    console.log(`El nuevo número es: ${notification.value}`); //Esta función manipula la información actualizada en el observable.
  }
}

/**
 * Clase Observadora que tiene una funcion de notificación en Inglés incluyendo el valor del observable actualizado.
 */
class NumberExampleEnglish {
  notify(notification) {
    console.log(`New number is : ${notification.value}`); //Esta función imprime en consola el valor de ese párametro recibido.
  }
}

// objeto de la clase observada
let numberExample = new NumberExample();

/**
 * En esta sección, los observadores NumberExampleSpanish y NumberExampleEnglish se suscriben al observable
 * poder ver los cambios de la clase observada.
 */
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

/**
 * Se invoca 2 veces la función increment del objeto de la clase obaservada y así hacer reaccionar a los observadores
 */
numberExample.increment();
numberExample.increment();
