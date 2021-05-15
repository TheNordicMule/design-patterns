abstract class Creator{
    public abstract factroyMethod(): Product;

    public someOperation(): string {
        const product = this.factroyMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }

}

class ConcreteCreator1 extends Creator {
    public factroyMethod(): Product {
        return new ConcreteProduct1();
    }
}


class ConcreteCreator2 extends Creator {
    public factroyMethod(): Product {
        return new ConcreteProduct2();
    }
}

interface Product {
    operation(): String;
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return `{Result of the ConcreteProduct1}`;
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return `{Result of the ConcreteProduct1}`;
}
}

function clientCode(creator: Creator) {
    console.log(creator.someOperation())
}

console.log(`App: Launched with ConcreteCreator1`)
clientCode(new ConcreteCreator1());
console.log(' ');
console.log(`App: Launched with ConcreteCreator2`)
clientCode(new ConcreteCreator2());
