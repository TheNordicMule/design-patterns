var concreteFactory1 = /** @class */ (function () {
    function concreteFactory1() {
    }
    concreteFactory1.prototype.createProductA = function () {
        return new ConcreteProductA1();
    };
    concreteFactory1.prototype.createProductB = function () {
        return new ConcreteProductB1();
    };
    return concreteFactory1;
}());
var concreteFactory2 = /** @class */ (function () {
    function concreteFactory2() {
    }
    concreteFactory2.prototype.createProductA = function () {
        return new ConcreteProductA2();
    };
    concreteFactory2.prototype.createProductB = function () {
        return new ConcreteProductB2();
    };
    return concreteFactory2;
}());
var ConcreteProductA1 = /** @class */ (function () {
    function ConcreteProductA1() {
    }
    ConcreteProductA1.prototype.usefulFunctionA = function () {
        return "The result of the product A1";
    };
    return ConcreteProductA1;
}());
var ConcreteProductA2 = /** @class */ (function () {
    function ConcreteProductA2() {
    }
    ConcreteProductA2.prototype.usefulFunctionA = function () {
        return "The result of the product A2";
    };
    return ConcreteProductA2;
}());
var ConcreteProductB1 = /** @class */ (function () {
    function ConcreteProductB1() {
    }
    ConcreteProductB1.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "The result of the B1 collaborating with the " + result;
    };
    ConcreteProductB1.prototype.usefulFunctionB = function () {
        return "the result of the product B1";
    };
    return ConcreteProductB1;
}());
var ConcreteProductB2 = /** @class */ (function () {
    function ConcreteProductB2() {
    }
    ConcreteProductB2.prototype.anotherUsefulFunctionB = function (collaborator) {
        var result = collaborator.usefulFunctionA();
        return "The result of the B2 collaborating with the " + result;
    };
    ConcreteProductB2.prototype.usefulFunctionB = function () {
        return "the result of the product B2";
    };
    return ConcreteProductB2;
}());
function clientCode(factory) {
    var productA = factory.createProductA();
    var productB = factory.createProductB();
    console.log(productB.usefulFunctionB());
    console.log(productB.anotherUsefulFunctionB(productA));
}
console.log("Client: testing client code with the first factory");
clientCode(new concreteFactory1());
console.log('');
console.log("Client: testing client code with the second factory");
clientCode(new concreteFactory2());
