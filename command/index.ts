interface Command {
  execute(): void;
}

class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(`I am the simple command and I am printing ${this.payload}`);
  }
}

class ComplexCommand implements Command {
  private receiver: Receiver;

  /**
   * Context data, required for launching the receiver's methods.
   */
  private a: string;

  private b: string;

  /**
   * Complex commands can accept one or several receiver objects along with
   * any context data via the constructor.
   */
  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  /**
   * Commands can delegate to any methods of a receiver.
   */
  public execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

class Invoker {
  private onStart: Command;

  private onFinish: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object): object is Command {
    return object.execute !== undefined;
  }
}

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('say Hi'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'send email', 'send report'));

invoker.doSomethingImportant();
