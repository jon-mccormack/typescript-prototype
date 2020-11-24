namespace SomeNamespace {
  export interface User {
    name: string;
    id: number;
  }

  export class TestClass {
    private name: string;

    constructor(name: string) {
      this.name = name;
    }
  }
}

async function test() {
  console.log("help");
}

module.exports = { test, SomeNamespace };
