import * as Models from "./models"

const jon: Models.SomeNamespace.User = {
  id: 1,
  name: "Jon McCormack",
};

const newTestClass:  Models.SomeNamespace.TestClass = new Models.SomeNamespace.TestClass(
  "jons"
);

console.log(jon);
console.log(newTestClass);
