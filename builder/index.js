var ConcreteBuilder1 = /** @class */ (function () {
    function ConcreteBuilder1() {
        this.reset();
    }
    ConcreteBuilder1.prototype.reset = function () {
        this.product = new Product1();
    };
    ConcreteBuilder1.prototype.productPartA = function () {
        this.product.parts.push("partA1");
    };
    ConcreteBuilder1.prototype.productPartB = function () {
        this.product.parts.push("partB1");
    };
    ConcreteBuilder1.prototype.productPartC = function () {
        this.product.parts.push("partC1");
    };
    ConcreteBuilder1.prototype.getProduct = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder1;
}());
var Product1 = /** @class */ (function () {
    function Product1() {
        this.parts = [];
    }
    Product1.prototype.listParts = function () {
        console.log("Product parts: " + this.parts.join(", ") + "\n");
    };
    return Product1;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMVP = function () {
        this.builder.productPartA();
    };
    Director.prototype.buildFullFeaturedProduct = function () {
        this.builder.productPartA();
        this.builder.productPartB();
        this.builder.productPartC();
    };
    return Director;
}());
function clientNode(director) {
    var builder = new ConcreteBuilder1();
    director.setBuilder(builder);
    console.log("standard basic product:");
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log("full featured product:");
    director.buildFullFeaturedProduct();
    builder.getProduct().listParts();
    console.log("custom product");
    builder.productPartA();
    builder.productPartB();
    builder.getProduct().listParts();
}
var director = new Director();
clientNode(director);
