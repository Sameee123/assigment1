function Car(manufacturer: string, modelName: string, ...details: [string, any][]): object {
  const car: any = {
    manufacturer,
    modelName
  };

  for (const [key, value] of details) {
    car[key] = value;
  }

  return car;
}

const carInfo = Car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

console.log(carInfo);