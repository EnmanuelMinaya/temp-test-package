/*  I)Lib + Package
val t = new Temperature(5.25, TemperatureScale.Celcius); //1. Constructor

t.ToF(); //2
t.ToC(); //3
t.ToK(); //4

---------------------------
II) ConsoleApp
    Instalar el paquete
    Usarlo
Update al console App.
II) ConsoleApp
    Instalar el paquete
    Usarlo
    Pedir Valor de la temperatura y escala al usuario
    Pedir hacia que otra escala quiere convertirla
    Mostrar resultado
    Puede se un One liner como:
    $ TempConverter 45 F to C
    $ 7.2222
    $ TempConverter -5 F to K
    $ 252.5944
*/

const { Module } = require("module");

class Temperature {
    constructor(degrees, scale) {
        this.degrees = degrees;
        this.scale = scale;
    }

    ToF() {
        if (this.scale === 'Celcius')
            return ((this.degrees * 9 / 5) + 32);
        else if (this.scale === 'Kelvin') {
            var num = ((this.degrees - 273.15) * 9 / 5 + 32)
            return Number(num.toFixed(2));
        }
        else
            return this.degrees;
    }

    ToC() {
        if (this.scale === 'Farenheit')
            return ((this.degrees - 32) * 5 / 9);
        else if (this.scale === 'Kelvin')
            return ((this.degrees - 273.15));
        else
            return this.degrees;
    }

    ToK() {
        if (this.scale === 'Farenheit')
            return ((this.degrees - 32) / 1.8) + 273.15;
        else if (this.scale === 'Celcius')
            return ((this.degrees - 32) / 1.8);
        else
            return this.degrees;
    }



}

module.exports = { Temperature }

