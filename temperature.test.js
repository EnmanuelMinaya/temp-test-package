const { Temperature } = require("./temperature");


const TemperatureScale = {
    Celcius: "Celcius",
    Farenheit: "Farenheit",
    Kelvin: "Kelvin"
};

test('converts 30C to 86F', () => {
    const t = new Temperature(30, TemperatureScale.Celcius)
    expect(t.ToF()).toBe(86);
});

test('converts 300K to 80.33F', () => {
    const t = new Temperature(300, TemperatureScale.Kelvin)
    expect(t.ToF()).toBe(80.33);
});

test('converts 86F to 30C', () => {
    const t = new Temperature(86, TemperatureScale.Farenheit)
    expect(t.ToC()).toBe(30);
});

test('converts 80.33F  to 300K', () => {
    const t = new Temperature(80.33, TemperatureScale.Farenheit)
    expect(t.ToK()).toBe(300);
});