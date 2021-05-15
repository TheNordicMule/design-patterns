interface Builder {
  productPartA(): void;
  productPartB(): void;
  productPartC(): void;
}

class ConcreteBuilder1 implements Builder {
  private product: Product1;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product1();
  }

  public productPartA(): void {
    this.product.parts.push("partA1");
  }

  public productPartB(): void {
    this.product.parts.push("partB1");
  }

  public productPartC(): void {
    this.product.parts.push("partC1");
  }

  public getProduct(): Product1 {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Product1 {
  public parts: string[] = [];
  public listParts(): void {
    console.log(`Product parts: ${this.parts.join(", ")}\n`);
  }
}

class Director {
  private builder: Builder;
  public setBuilder(builder: Builder) {
    this.builder = builder;
  }

  public buildMVP(): void {
    this.builder.productPartA();
  }

  public buildFullFeaturedProduct(): void {
    this.builder.productPartA();
    this.builder.productPartB();
    this.builder.productPartC();
  }
}

function clientNode(director: Director) {
  const builder = new ConcreteBuilder1();
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

const director = new Director();
clientNode(director);
