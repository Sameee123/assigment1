function Car(manufacturer, modelName) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (var _a = 0, details_1 = details; _a < details_1.length; _a++) {
        var _b = details_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var carInfo = Car("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(carInfo);
