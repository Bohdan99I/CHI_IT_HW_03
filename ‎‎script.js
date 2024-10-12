////////////////////////////////////////////////////////////////////
console.log("=== Завдання 1 ===");

// Клас Transport
class Transport {
  ride() {
    throw new Error("Метод 'ride()' повинен бути реалізований.");
  }

  stop() {
    throw new Error("Метод 'stop()' повинен бути реалізований.");
  }
}

// Клас Car
class Car extends Transport {
  ride() {
    console.log("Машина їде.");
  }

  stop() {
    console.log("Машина зупинилася.");
  }
}

// Клас Bike
class Bike extends Transport {
  ride() {
    console.log("Велосипед їде.");
  }

  stop() {
    console.log("Велосипед зупинився.");
  }
}

// "Фабрика"
class TransportFactory {
  static createTransport(type) {
    switch (type) {
      case "car":
        return new Car();
      case "bike":
        return new Bike();
      default:
        throw new Error("Невідомий тип транспорту.");
    }
  }
}

// Використання фабрики
const car = TransportFactory.createTransport("car");
car.ride();
car.stop();

const bike = TransportFactory.createTransport("bike");
bike.ride();
bike.stop();
